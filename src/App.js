import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {

  useEffect( () => {
    setTodos([
      {
        text: 'Learn ReactJS',
        completed: false,
        id: 1
      },
      {
        text: 'Learn ReasonML',
        completed: false,
        id: 2
      },
      {
        text: 'Learn ReScript',
        completed: false,
        id: 3
      },
      {
        text: 'Crypto 101',
        completed: false,
        id: 4
      }
    ])
  }, [])

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
