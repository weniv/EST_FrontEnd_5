import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App2';
import TodoApp from './App3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);