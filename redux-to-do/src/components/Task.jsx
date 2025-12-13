// components/Task.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TASK, EDIT_TASK } from '../redux/actionTypes';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    // Dispatch TOGGLE_TASK
    dispatch({
      type: TOGGLE_TASK,
      payload: { id: task.id },
    });
  };

  const handleEdit = () => {
    if (isEditing) {
      // Save the edit and dispatch EDIT_TASK
      dispatch({
        type: EDIT_TASK,
        payload: { id: task.id, newDescription: newDescription.trim() },
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ margin: '10px', border: '1px solid #eee', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
      
      <div>
        <button onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default Task;