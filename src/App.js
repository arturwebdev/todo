import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { selectTodos } from "./store/slices/todos/todosSlice";
import { resetTxt, selectTxt, toggleTxt } from "./store/slices/txt/txtSlice";
import { useEffect, useMemo } from "react";
import { changeTodo, deleteTodo, fetchTodos, postTodo } from "./store/slices/todos/todosAPI";

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const txt = useSelector(selectTxt)


  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postTodo(txt))
    dispatch(resetTxt())
  }

  const newTodos = useMemo (() => {
    return todos.toReversed()
  }, [todos])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={txt} onChange={({target: {value}}) => dispatch(toggleTxt(value))} type="text" />
        <button>Add</button>
      </form>
      <div>
        {
          newTodos.map(todo => (
            <h1 key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}
              > {todo.title} </span>

              <span
                style={{
                  cursor: 'pointer',
                  fontFamily: "monospace",
                  color: 'red',
                }}
                onClick={() => dispatch(deleteTodo(todo.id))}
              > X </span>
              <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => {dispatch(changeTodo(todo.id))}}
              />
            </h1>
          ))
        }
      </div>
    </div>
  );
}

export default App;
