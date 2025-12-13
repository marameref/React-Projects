// components/AddTask.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // <-- Hook to dispatch actions
import { ADD_TASK } from '../redux/actionTypes';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTask = {
      id: Date.now(), // Simple unique ID
      description: description.trim(),
      isDone: false,
    };

    // Dispatch the ADD_TASK action
    dispatch({
      type: ADD_TASK,
      payload: newTask,
    });

    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <input
        type="text"
        placeholder="New task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
