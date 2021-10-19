import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch( 
            deleteTodo({
                id: todo.id
            })
        )
    }

    const completeHandler = () => {
        dispatch(
            toggleComplete({
                id: todo.id
            })
        )
    }

    return (
        <li className={ todo.completed ? 'todo-item completed': 'todo-item'} id={`todo_${todo.id}`}>
            <div className="todo-inner">
                <span className="todo-txt">{todo.text}</span>
                <div className="actions">
                    <button className="btn-complete" onClick={completeHandler}>{ todo.completed ? 'Uncomplete': 'Complete'}</button>
                    <button className="btn-delete" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Todo;