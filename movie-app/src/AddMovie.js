// src/AddMovie.js

import React, { useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';

const AddMovie = ({ onAdd }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: 1,
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Simple validation
        if (newMovie.title && newMovie.rating >= 1 && newMovie.rating <= 5) {
            // Pass the new movie object up to the parent component (App.js)
            onAdd({ ...newMovie, id: Date.now(), rating: Number(newMovie.rating) });
            // Reset form and close modal
            setNewMovie({ title: '', description: '', posterURL: '', rating: 1 });
            handleClose();
        } else {
            alert("Please fill in the title and provide a valid rating (1-5).");
        }
    };

    return (
        <>
            <Button variant="success" onClick={handleShow} className="mb-4">
                Add New Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie/Show Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Title</Form.Label>
                            <Col sm="9">
                                <Form.Control name="title" type="text" onChange={handleChange} required />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Rating (1-5)</Form.Label>
                            <Col sm="9">
                                <Form.Control name="rating" type="number" min="1" max="5" onChange={handleChange} required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Poster URL</Form.Label>
                            <Col sm="9">
                                <Form.Control name="posterURL" type="text" onChange={handleChange} placeholder="https://..." />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" as="textarea" rows={3} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddMovie;