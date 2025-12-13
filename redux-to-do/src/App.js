// App.js
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '50px auto', border: '2px solid #007bff', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff' }}>Redux ToDo List</h1>
      
      {/* 1. Add Task Input */}
      <AddTask />
      
      {/* 2. List and Filter */}
      <ListTask />
      
    </div>
  );
}

export default App;