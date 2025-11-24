// src/Player.js

import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component must render a card displaying all player attributes
const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
    // Define inline styling for the card container
    const cardStyle = {
        width: '18rem',
        margin: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: '0.3s',
        textAlign: 'center'
    };

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={imageURL} alt={`Image of ${name}`} style={{ height: '180px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title className="text-primary">{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
                
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                    <li><strong>Nationality:</strong> {nationality}</li>
                    <li><strong>Age:</strong> {age}</li>
                    <li><strong>Jersey:</strong> <span style={{ fontWeight: 'bold', color: 'red' }}>{jerseyNumber}</span></li>
                </ul>
            </Card.Body>
        </Card>
    );
};

// Define default props for all attributes
Player.defaultProps = {
    name: "Unknown Player",
    team: "No Club",
    nationality: "International",
    jerseyNumber: "N/A",
    age: "Unknown",
    imageURL: "https://via.placeholder.com/150/CCCCCC/FFFFFF?text=N%2FA"
};

export default Player;