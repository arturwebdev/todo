import { createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../../../MyAxios";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(){
        const {data} = await myAxios.get('/todos')

        return data
    }
)

export const postTodo = createAsyncThunk(
    'todos/postTodo',
    async function(title){
        const {data} = await myAxios.post('/todos', {title, completed: false})
        return data
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function(id){
        await myAxios.delete('/todos/' + id)

        return id
    }
)

export const changeTodo = createAsyncThunk(
    'todos/changeTodo',
    async function(id){
        const {data: {completed}} = await myAxios.get('/todos/' + id)
        const {data: newTodo} = await myAxios.patch('/todos/' + id, {completed: !completed})
        
        return newTodo
    }
)