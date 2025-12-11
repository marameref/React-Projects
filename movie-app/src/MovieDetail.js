// src/MovieDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import initialMovies from './data'; // Import data to find the movie

// Component to handle the display of a single movie's details
const MovieDetail = () => {
    // Get the dynamic movie ID from the URL using useParams
    const { id } = useParams();

    // Find the movie object that matches the ID (Note: id from URL is a string)
    const movie = initialMovies.find(m => m.id === Number(id));

    // Handle case where movie is not found (optional, but good practice)
    if (!movie) {
        return (
            <Container className="my-5 text-center">
                <h2>Movie Not Found</h2>
                <Link to="/">
                    <Button variant="secondary">Go Back Home</Button>
                </Link>
            </Container>
        );
    }

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">{movie.title}</h1>
            
            {/* 1. Trailer Section */}
            <div className="trailer-container mb-5" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', margin: '0 auto' }}>
                <iframe 
                    title={`${movie.title} Trailer`}
                    src={movie.trailerURL} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
            </div>

            {/* 2. Description Section */}
            <Card className="p-4 shadow">
                <Card.Body>
                    <Card.Title as="h3" className="text-primary">Synopsis</Card.Title>
                    <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        {movie.description}
                    </Card.Text>
                    <hr />
                    <p><strong>Rating:</strong> <span className="text-warning">{movie.rating} / 5</span></p>
                    <p><strong>Poster:</strong> {movie.posterURL}</p>
                </Card.Body>
            </Card>

            {/* 3. Navigation Back to Home */}
            <div className="mt-4">
                <Link to="/">
                    <Button variant="info">← Back to Movie List</Button>
                </Link>
            </div>
        </Container>
    );
};

export default MovieDetail;