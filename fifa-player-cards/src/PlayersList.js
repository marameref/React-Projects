// src/PlayersList.js

import React from 'react';
import Player from './Player'; // Import the Player component
import players from './players'; // Import the players data
import { Container } from 'react-bootstrap';

const PlayersList = () => {
    return (
        <Container>
            <h2 className="text-center my-4">FIFA World Class Players</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    // Map through the players array
                    players.map((player, index) => (
                        // Render the Player component
                        // Use the spread operator ({...player}) to pass ALL attributes as props
                        <Player 
                            key={index} 
                            {...player} 
                        />
                    ))
                }
            </div>
        </Container>
    );
};

export default PlayersList;