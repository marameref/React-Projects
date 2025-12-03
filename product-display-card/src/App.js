// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, Container } from 'react-bootstrap';

// Import all created components
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Define the name variable outside the root component
const firstName = "Mara"; // Change to "" or null to test the "Hello, there!" message

function App() {
    // Styling for the entire application layout
    const appContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8', // Light background
        padding: '20px'
    };

    // Styling for the main product card
    const productCardStyle = {
        width: '28rem',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        border: 'none'
    };

    // Styling for the personalized area below the card
    const greetingAreaStyle = {
        marginTop: '30px',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };

    return (
        <div className="App" style={appContainerStyle}>
            
            {/* 1. Create a card that contains all components */}
            <Card style={productCardStyle}>
                <Image />
                <Card.Body>
                    <Name />
                    <Description />
                    <Price />
                </Card.Body>
            </Card>

            {/* 2. Display the conditional message and image */}
            <div style={greetingAreaStyle}>
                
                {/* Conditional Message */}
                <h3>
                    {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
                </h3>
                
                {/* Conditional Image */}
                {firstName && (
                    <img 
                        src="https://via.placeholder.com/60/007bff/FFFFFF?text=User" 
                        alt="User Profile" 
                        style={{ borderRadius: '50%', marginTop: '10px', border: '2px solid #007bff' }}
                    />
                )}
            </div>
            
        </div>
    );
}

export default App;