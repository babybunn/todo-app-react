import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "status",
    initialState: [
        {
            status: 'all',
            todos: []
        }, 
    ],
    reducers: {
        filterTodo: (state, action) => {
            switch(action.payload.status) {
                case 'completed':
                    return state.filter( (todo) => todo.completed === true )
                case 'uncompleted':
                    return state.filter( (todo) => todo.completed === false )
                default:
                    return state
            }
        }
    }
})

export const { filterTodo } = filterSlice.actions;

export default filterSlice.reducer;