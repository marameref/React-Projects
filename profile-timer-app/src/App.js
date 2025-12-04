// src/App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';

// Define the class component
class App extends Component {
    // 1. Initialize State in the constructor
    constructor(props) {
        super(props);
        this.state = {
            // Person object containing profile details
            Person: {
                fullName: "Aisha Al-Hassan",
                bio: "Experienced DevOps Engineer specializing in Kubernetes orchestration and automated CI/CD pipelines.",
                imgSrc: "https://via.placeholder.com/150/007bff/FFFFFF?text=Aisha",
                profession: "DevOps Engineer"
            },
            // Boolean state to control visibility
            shows: false,
            // State variables for the timer
            mountTime: new Date(), // Time when the component mounted
            timeElapsed: 0,        // Time elapsed in seconds
            intervalId: null       // To store the ID of setInterval
        };
    }

    // 2. Lifecycle Method: componentDidMount
    // This method is called immediately after the component is rendered for the first time.
    componentDidMount() {
        console.log("Component Mounted. Starting timer.");
        // Set up the interval (Hint) to run every 1000 milliseconds (1 second)
        const intervalId = setInterval(() => {
            this.setState(prevState => ({
                // Calculate time difference between now and when the component mounted
                timeElapsed: Math.floor((new Date() - prevState.mountTime) / 1000)
            }));
        }, 1000);

        // Save the interval ID to state so we can clear it later
        this.setState({ intervalId });
    }

    // 3. Lifecycle Method: componentWillUnmount
    // This method is called just before the component is unmounted and destroyed.
    componentWillUnmount() {
        console.log("Component Unmounted. Clearing timer.");
        // Clear the interval to prevent memory leaks!
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    // Method to toggle the 'shows' state
    toggleProfile = () => {
        this.setState(prevState => ({
            shows: !prevState.shows
        }));
    };

    // Render method to output JSX
    render() {
        const { Person, shows, timeElapsed } = this.state;

        return (
            <Container className="text-center my-5">
                
                {/* Button to toggle the show state */}
                <Button 
                    onClick={this.toggleProfile} 
                    variant="primary" 
                    size="lg"
                    className="mb-4"
                >
                    {shows ? "Hide Profile" : "Show Profile"}
                </Button>

                {/* Conditional Rendering: Profile appears when shows is true */}
                {shows && (
                    <Card style={{ width: '25rem', margin: '0 auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <Card.Img 
                            variant="top" 
                            src={Person.imgSrc} 
                            alt={Person.fullName} 
                            style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '20px auto 0' }}
                        />
                        <Card.Body>
                            <Card.Title className="text-success">{Person.fullName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{Person.profession}</Card.Subtitle>
                            <Card.Text>{Person.bio}</Card.Text>
                        </Card.Body>
                    </Card>
                )}

                {/* Time Elapsed Field */}
                <div className="mt-5 p-3 border rounded bg-light">
                    <h4>Component Mount Time Elapsed</h4>
                    <p className="lead text-info">
                        The component has been mounted for **{timeElapsed} seconds**.
                    </p>
                </div>
            </Container>
        );
    }
}

export default App;