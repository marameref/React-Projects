// src/App.js (UPDATED for Routing)

import React, { useState, useCallback, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

import initialMovies from './data';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import MovieDetail from './MovieDetail'; // NEW Detail Component

// --- Home View Component ---
// We create a wrapper component for the homepage content
const HomeView = ({ movies, handleAddMovie, handleFilterChange, filterCriteria }) => {
    // Memoized filtering function from previous checkpoint
    const filteredMovies = useMemo(() => {
        const searchTitle = filterCriteria.title.toLowerCase();
        const minRating = filterCriteria.rating;

        return movies.filter(movie => {
            const matchesTitle = movie.title.toLowerCase().includes(searchTitle);
            const matchesRating = movie.rating >= minRating;
            return matchesTitle && matchesRating;
        });
    }, [movies, filterCriteria]);


    return (
        <Container className="my-5">
            <Alert variant="info" className="text-center">
                <h2>🎬 Movie & TV Show Tracker</h2>
                <p>Use the inputs to filter the list or the button to add new content!</p>
            </Alert>
            
            <Filter onFilterChange={handleFilterChange} />
            <AddMovie onAdd={handleAddMovie} />
            
            <MovieList movies={filteredMovies} />
        </Container>
    );
}

// --- App Component (The Router) ---
function App() {
    const [movies, setMovies] = useState(initialMovies); 
    const [filterCriteria, setFilterCriteria] = useState({
        title: '',
        rating: 1,
    });

    const handleAddMovie = useCallback((newMovie) => {
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    }, []);

    const handleFilterChange = useCallback((newCriteria) => {
        setFilterCriteria((prevCriteria) => ({
            ...prevCriteria,
            ...newCriteria,
        }));
    }, []);
    
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route 1: Home Page - Displays the list, filter, and add form */}
                    <Route 
                        path="/" 
                        element={
                            <HomeView 
                                movies={movies} 
                                handleAddMovie={handleAddMovie} 
                                handleFilterChange={handleFilterChange}
                                filterCriteria={filterCriteria}
                            />
                        } 
                    />

                    {/* Route 2: Detail Page - Uses a URL parameter (:id) */}
                    <Route 
                        path="/movie/:id" 
                        element={<MovieDetail />} 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;