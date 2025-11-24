// src/App.js

import React from 'react';
import PlayersList from './PlayersList'; // Import the PlayersList component
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function App() {
  return (
    <div className="App">
      <PlayersList /> 
    </div>
  );
}

export default App;