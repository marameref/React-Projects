// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Import Provider and the Store
import { Provider } from 'react-redux';
import store from './redux/store'; // Make sure this path is correct!

// Standard React 18+ way to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 2. Wrap App with the Provider component */}
    <Provider store={store}> 
      <App /> {/* The App component and all its children can now use Redux hooks */}
    </Provider>
  </React.StrictMode>
);
