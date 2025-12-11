// src/components/TaskForm.js

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

/**
 * TaskForm Component: Handles adding new tasks and editing existing tasks.
 * Uses local state for form inputs and performs basic validation.
 * @param {object} props - The component props.
 * @param {function} props.onSave - Function called to save the new or edited task.
 * @param {object | null} props.editingTask - The task object being edited, or null if adding a new task.
 */
const TaskForm = ({ onSave, editingTask }) => {
    // Initialize form state using the editing task's details if provided
    const [task, setTask] = useState({ 
        name: '', 
        description: '' 
    });
    const [error, setError] = useState('');

    // useEffect hook to synchronize form state when editingTask prop changes
    useEffect(() => {
        if (editingTask) {
            setTask({
                name: editingTask.name,
                description: editingTask.description
            });
        } else {
            // Clear form if we switch back to adding a new task
            setTask({ name: '', description: '' });
        }
        setError(''); // Clear errors on prop change
    }, [editingTask]);

    // Handles changes to form inputs (name and description)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- Form Validation ---
        if (!task.name.trim() || !task.description.trim()) {
            setError('Task Name and Description are required.');
            return;
        }

        setError(''); // Clear previous errors

        // Create the task object to be passed up
        const taskToSave = {
            ...task,
            // If editing, use existing ID and isCompleted status; otherwise, generate new ones
            id: editingTask ? editingTask.id : Date.now(),
            isCompleted: editingTask ? editingTask.isCompleted : false
        };

        onSave(taskToSave); // Call the save handler in the parent component

        // Reset form for new task input only if not currently editing
        if (!editingTask) {
            setTask({ name: '', description: '' });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4 p-3 border rounded shadow-sm">
            <h3>{editingTask ? 'Edit Task' : 'Add New Task'}</h3>

            {error && <Alert variant="danger">{error}</Alert>}

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="taskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            placeholder="Enter task name"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="taskDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant={editingTask ? 'success' : 'primary'} type="submit">
                {editingTask ? 'Save Changes' : 'Add Task'}
            </Button>
            
            {/* Show a Cancel button if currently editing */}
            {editingTask && (
                <Button variant="secondary" onClick={() => onSave(null)} className="ms-2">
                    Cancel Edit
                </Button>
            )}
        </Form>
    );
};

export default TaskForm;