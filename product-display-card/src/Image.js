// src/Image.js
import React from 'react';
import product from './product';
import { Card } from 'react-bootstrap';

const Image = () => {
    // Creative Styling for the image container
    const imgStyle = {
        objectFit: 'cover',
        borderBottom: '4px solid #007bff', // Highlight color
        borderTopLeftRadius: 'calc(0.25rem - 1px)',
        borderTopRightRadius: 'calc(0.25rem - 1px)'
    };

    return (
        <Card.Img 
            variant="top" 
            src={product.imageURL} 
            alt={product.name} 
            style={imgStyle}
        />
    );
};

export default Image;