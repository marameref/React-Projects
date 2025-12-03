// src/Description.js
import React from 'react';
import product from './product';

const Description = () => {
    // Creative Styling for description text
    const descStyle = {
        color: '#495057', 
        fontSize: '1rem',
        lineHeight: '1.4',
        fontStyle: 'italic',
        padding: '10px 0'
    };
    return <p style={descStyle}>{product.description}</p>;
};

export default Description;