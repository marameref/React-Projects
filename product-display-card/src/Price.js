// src/Price.js
import React from 'react';
import product from './product';

const Price = () => {
    // Creative Styling for price highlighting
    const priceStyle = {
        color: '#28a745', // Success Green
        fontSize: '1.8rem',
        fontWeight: '900',
        padding: '5px 10px',
        border: '1px solid #28aa4550',
        borderRadius: '5px',
        display: 'inline-block'
    };
    return <p style={priceStyle}>${product.price}</p>;
};

export default Price;