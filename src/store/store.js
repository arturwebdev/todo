import { configureStore } from "@reduxjs/toolkit";
import { txtReducer } from "./slices/txt/txtSlice";
import { todosReducer } from "./slices/todos/todosSlice";



const store = configureStore({
    reducer: {
        txt: txtReducer,
        todos: todosReducer
    }
})


export default store