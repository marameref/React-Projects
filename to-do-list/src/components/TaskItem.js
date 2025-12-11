// src/components/TaskItem.js

import React from 'react';
import { ListGroup, Button, Row, Col, Badge } from 'react-bootstrap';

/**
 * TaskItem Component: Displays a single task with actions (Edit, Delete, Toggle Completion).
 * @param {object} props - The component props.
 * @param {object} props.task - The individual task object.
 * @param {function} props.onToggle - Function to mark the task as completed/active.
 * @param {function} props.onDelete - Function to delete the task.
 * @param {function} props.onEdit - Function to set the task into editing mode.
 */
const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
    // Style for completed tasks to visually distinguish them
    const itemStyle = {
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        backgroundColor: task.isCompleted ? '#f0fff0' : 'white', // light green background
        cursor: 'pointer' // Indicate clickability for editing
    };

    // Handler for deleting the task with a confirmation prompt
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
            onDelete(task.id);
        }
    };

    return (
        <ListGroup.Item 
            className="mb-2 p-3 border rounded" 
            style={itemStyle} 
            onClick={() => onEdit(task)} // Clicking anywhere on the item opens edit mode
        >
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    {/* Task Name and Status Badge */}
                    <h5 className="mb-1 d-inline me-2" style={{ textDecoration: itemStyle.textDecoration }}>
                        {task.name}
                    </h5>
                    <Badge bg={task.isCompleted ? 'success' : 'warning'}>
                        {task.isCompleted ? 'Completed' : 'Active'}
                    </Badge>
                    <p className="text-muted mt-1 mb-0" style={{ fontSize: '0.9rem', textDecoration: itemStyle.textDecoration }}>
                        {task.description}
                    </p>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-md-end mt-2 mt-md-0">
                    {/* Action Buttons */}
                    <Button 
                        variant={task.isCompleted ? 'warning' : 'success'} 
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the item's onEdit click
                            onToggle(task.id);
                        }}
                        className="me-2"
                    >
                        {task.isCompleted ? 'Mark Active' : 'Complete'}
                    </Button>
                    <Button 
                        variant="info" 
                        onClick={(e) => {
                            e.stopPropagation(); 
                            onEdit(task); // Explicit edit button
                        }}
                        className="me-2"
                    >
                        Edit
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDelete();
                        }}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default TaskItem;
