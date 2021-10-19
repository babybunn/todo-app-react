import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Form status={status} setStatus={setStatus} />
      <TodoList status={status} />
    </div>
  );
}

export default App;
