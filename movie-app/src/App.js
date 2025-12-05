// src/App.js

import React, { useState, useCallback, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap';

import initialMovies from './data'; // Initial data
import MovieList from './MovieList'; // Component to display the list
import Filter from './Filter';     // Component for filtering
import AddMovie from './AddMovie'; // Component for adding new movies

function App() {
    // State 1: Manages the main array of movies
    const [movies, setMovies] = useState(initialMovies); 
    
    // State 2: Manages the filter criteria (title and minimum rating)
    const [filterCriteria, setFilterCriteria] = useState({
        title: '',
        rating: 1, // Default minimum rating
    });

    // --- Logic for Adding a Movie ---
    const handleAddMovie = useCallback((newMovie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    }, []);

    // --- Logic for Filtering ---
    const handleFilterChange = useCallback((newCriteria) => {
        setFilterCriteria((prevCriteria) => ({
            ...prevCriteria,
            ...newCriteria, // Merge new title or rating into existing criteria
        }));
    }, []);

    // Memoized filtering function for performance
    const filteredMovies = useMemo(() => {
        // Convert title to lowercase for case-insensitive searching
        const searchTitle = filterCriteria.title.toLowerCase();
        const minRating = filterCriteria.rating;

        return movies.filter(movie => {
            // Filter by Title
            const matchesTitle = movie.title.toLowerCase().includes(searchTitle);
            
            // Filter by Rating (Check if movie rating is >= minimum required rating)
            const matchesRating = movie.rating >= minRating;

            return matchesTitle && matchesRating;
        });
    }, [movies, filterCriteria]);


    return (
        <div className="App">
            <Container className="my-5">
                <Alert variant="info" className="text-center">
                    <h2>🎬 Movie & TV Show Tracker</h2>
                    <p>Use the inputs to filter the list or the button to add new content!</p>
                </Alert>
                
                {/* 1. Filter Component */}
                <Filter onFilterChange={handleFilterChange} />
                
                {/* 2. Add Movie Component */}
                <AddMovie onAdd={handleAddMovie} />
                
                {/* 3. Movie List Component */}
                <MovieList movies={filteredMovies} />
            </Container>
        </div>
    );
}

export default App;