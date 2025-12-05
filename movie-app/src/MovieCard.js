// src/MovieCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '18rem', margin: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Card.Img 
                variant="top" 
                src={movie.posterURL} 
                alt={movie.title} 
                style={{ height: '280px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title className="text-primary">{movie.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-warning">
                    Rating: {movie.rating} / 5
                </Card.Subtitle>
                <Card.Text>
                    {movie.description.substring(0, 80)}...
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;