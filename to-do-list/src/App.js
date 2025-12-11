// src/App.js

import React, { useState, useEffect, useCallback } from 'react';
import { Container, Alert, Button, Row, Col } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

// Key used for browser storage
const STORAGE_KEY = 'react-todo-list-tasks';

// --- Helper Functions for Local Storage ---
const loadTasksFromStorage = () => {
    try {
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        // If storage is empty, return an empty array
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (e) {
        console.error("Could not load tasks from storage", e);
        return [];
    }
};

const saveTasksToStorage = (tasks) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
        console.error("Could not save tasks to storage", e);
    }
};

/**
 * App Component: Manages the central state of the To-Do list and handles persistence.
 */
function App() {
    // 1. STATE INITIALIZATION: Load tasks from localStorage on first render
    const [tasks, setTasks] = useState(loadTasksFromStorage);
    // State to track which task is currently being edited
    const [editingTask, setEditingTask] = useState(null);
    // State for filtering
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'


    // 2. EFFECT FOR PERSISTENCE: Save tasks to localStorage whenever the 'tasks' state changes
    useEffect(() => {
        saveTasksToStorage(tasks);
    }, [tasks]); // Dependency array ensures this runs only when 'tasks' changes


    // --- CRUD Operations ---

    // Handles saving a new or edited task
    const handleSaveTask = useCallback((taskToSave) => {
        if (!taskToSave) {
            // Cancel edit mode
            setEditingTask(null);
            return;
        }

        setTasks(prevTasks => {
            if (prevTasks.some(t => t.id === taskToSave.id)) {
                // EDIT Existing Task: Map over tasks and replace the one with the matching ID
                return prevTasks.map(t => 
                    t.id === taskToSave.id ? taskToSave : t
                );
            } else {
                // ADD New Task
                return [taskToSave, ...prevTasks]; // Add new tasks to the top
            }
        });
        
        // Exit edit mode after saving
        setEditingTask(null); 
    }, []);

    // Handles deleting a task by its ID
    const handleDeleteTask = useCallback((id) => {
        // Filter out the task with the matching ID
        setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
    }, []);

    // Handles toggling a task's completion status
    const handleToggleTask = useCallback((id) => {
        setTasks(prevTasks => 
            prevTasks.map(t => 
                t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
            )
        );
    }, []);

    // Handles setting a task to be edited
    const handleEditTask = useCallback((task) => {
        setEditingTask(task);
    }, []);


    // --- Filtering Logic ---
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') {
            return !task.isCompleted;
        }
        if (filter === 'completed') {
            return task.isCompleted;
        }
        return true; // 'all' filter
    });


    return (
        <Container className="my-5">
            <Alert variant="primary" className="text-center">
                <h1 className="mb-0">📝 React To-Do List</h1>
            </Alert>
            
            {/* Task Form Component (used for both Add and Edit) */}
            <TaskForm 
                onSave={handleSaveTask} 
                editingTask={editingTask} 
            />

            <h2 className="mt-5 mb-3">Your Tasks</h2>
            
            {/* Filter Buttons */}
            <Row className="mb-3">
                <Col>
                    <Button 
                        variant={filter === 'all' ? 'dark' : 'outline-dark'} 
                        onClick={() => setFilter('all')} 
                        className="me-2"
                    >
                        All ({tasks.length})
                    </Button>
                    <Button 
                        variant={filter === 'active' ? 'warning' : 'outline-warning'} 
                        onClick={() => setFilter('active')} 
                        className="me-2"
                    >
                        Active ({tasks.filter(t => !t.isCompleted).length})
                    </Button>
                    <Button 
                        variant={filter === 'completed' ? 'success' : 'outline-success'} 
                        onClick={() => setFilter('completed')}
                    >
                        Completed ({tasks.filter(t => t.isCompleted).length})
                    </Button>
                </Col>
            </Row>

            {/* Task List Component */}
            <TaskList 
                tasks={filteredTasks}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
            />

            <p className="mt-4 text-center text-muted">
                *Tasks are saved automatically to your browser's local storage.*
            </p>
        </Container>
    );
}

export default App;