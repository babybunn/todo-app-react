import React,{useEffect, useState} from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = ({status}) => {

    const todos = useSelector( (state) =>  state.todos );
    const [filteredTodos, setFilteredTodo] = useState([]);

    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFilteredTodo( todos.filter( todo => todo.completed === true ) )
                break;
            case 'incompleted':
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
        <div className="todo-wrapper">
            <ul className="todo-list">
                {
                    filteredTodos.map( (todo) => (
                        <Todo todo={todo} key={todo.id}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;