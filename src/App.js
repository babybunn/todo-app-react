import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
