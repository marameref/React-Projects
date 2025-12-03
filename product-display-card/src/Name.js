// src/Name.js
import React from 'react';
import product from './product';

const Name = () => {
    // Creative Styling for the title
    const nameStyle = {
        color: '#007bff', 
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
    };
    return <h2 style={nameStyle}>{product.name}</h2>;
};

export default Name;