import React from 'react';

const Todo = ({todo, todos, setTodos, setStatus}) => {
    const deleteHandler = () => {
        setTodos( todos.filter( el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos( todos.map( item => {
            if( item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }) )
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