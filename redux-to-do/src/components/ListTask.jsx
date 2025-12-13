// components/ListTask.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // <-- Hook to read state
import Task from './Task';
import { SET_FILTER } from '../redux/actionTypes';

const ListTask = () => {
  // Use useSelector to get the tasks and the current filter
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // 1. Filtering Logic
  const getFilteredTasks = () => {
    switch (filter) {
      case 'DONE':
        return tasks.filter(task => task.isDone);
      case 'NOT_DONE':
        return tasks.filter(task => !task.isDone);
      case 'ALL':
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div style={{ margin: '20px' }}>
      {/* 2. Filter Buttons */}
      <div>
        <button onClick={() => dispatch({ type: SET_FILTER, payload: 'ALL' })}>
          All
        </button>
        <button onClick={() => dispatch({ type: SET_FILTER, payload: 'DONE' })}>
          Done
        </button>
        <button onClick={() => dispatch({ type: SET_FILTER, payload: 'NOT_DONE' })}>
          Not Done
        </button>
        <span style={{ marginLeft: '10px' }}>
          Current Filter: <strong>{filter}</strong>
        </span>
      </div>

      {/* 3. Task List */}
      <div style={{ marginTop: '15px' }}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks match the current filter.</p>
        )}
      </div>
    </div>
  );
};

export default ListTask;
