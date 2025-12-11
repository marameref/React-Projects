// src/components/TaskList.js

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

/**
 * TaskList Component: Renders a list of TaskItem components.
 * @param {object} props - The component props.
 * @param {Array<object>} props.tasks - The list of task objects.
 * @param {function} props.onToggle - Handler for toggling task completion.
 * @param {function} props.onDelete - Handler for deleting a task.
 * @param {function} props.onEdit - Handler for entering edit mode.
 */
const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
    return (
        <ListGroup>
            {tasks.length === 0 ? (
                <p className="text-center text-muted">No tasks yet. Add a new one above!</p>
            ) : (
                tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))
            )}
        </ListGroup>
    );
};

export default TaskList;