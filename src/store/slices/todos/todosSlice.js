import { createSlice } from "@reduxjs/toolkit";
import { changeTodo, deleteTodo, fetchTodos, postTodo } from "./todosAPI";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {},
    extraReducers: {
        [fetchTodos.fulfilled]: (state, {payload}) => {
            state.push(...payload)
        },
        [postTodo.fulfilled]: (state, {payload}) => {
            state.push(payload)
        },
        [deleteTodo.fulfilled]: (state, {payload}) => {
            const idx = state.findIndex(todo => todo.id === payload)
            state.splice(idx, 1)
        },
        [changeTodo.fulfilled]: (state, {payload}) => {
            const idx = state.findIndex(todo => todo.id === payload.id)
            state[idx] = payload
        },
    }
})

export const selectTodos = state => state.todos

export const {} = todosSlice.actions

export const todosReducer = todosSlice.reducer