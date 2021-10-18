import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {

  

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodo] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodo( todos.filter( todo => todo.completed === true ) )
        break;
      case 'uncompleted':
        setFilteredTodo( todos.filter( todo => todo.completed === false ) )
        break;
      default:
        setFilteredTodo(todos)
        break;
    }
  }

  useEffect( () => {
    filterHandler()
  }, [todos, status])

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Form 
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
