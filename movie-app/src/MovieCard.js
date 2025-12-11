// src/MovieCard.js (UPDATED to include Link)

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link

const MovieCard = ({ movie }) => {
    // Wrap the card in a Link component
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '18rem', margin: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
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
        </Link>
    );
};

export default MovieCard;