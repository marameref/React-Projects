// src/MovieList.js

import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <h3 className="text-danger mt-5">No movies match the current filter criteria.</h3>
                )
            }
        </div>
    );
};

export default MovieList;