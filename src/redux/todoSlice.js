import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [
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
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                text: action.payload.text,
                completed: false,
                id: Date.now()
            }
            state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            state.map( (todo) => {
                if( todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
            })
        },
        deleteTodo: (state, action) => {
            return state.filter( todo => todo.id !== action.payload.id)
        },
    }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

// export const reducer = todoSlice.reducer;
export default todoSlice.reducer;