// src/Filter.js

import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Filter = ({ onFilterChange }) => {
    return (
        <Form className="mb-4 p-3 border rounded bg-light">
            <Row>
                <Col>
                    <Form.Group controlId="filterTitle">
                        <Form.Label>Filter by Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter movie title..." 
                            onChange={(e) => onFilterChange({ title: e.target.value })}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="filterRating">
                        <Form.Label>Filter by Minimum Rating</Form.Label>
                        <Form.Control 
                            type="number" 
                            min="1" 
                            max="5"
                            placeholder="Enter min rating (1-5)..." 
                            onChange={(e) => onFilterChange({ rating: Number(e.target.value) })}
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default Filter;