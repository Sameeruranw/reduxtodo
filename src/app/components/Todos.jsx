import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";
import "./AddTodo.scss"
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todos">Todos
      <div className="todo">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button className="delete"
          onClick={()=>dispatch(removeTodo(todo.id))}
          >delete</button>
            
        </li>
        
      ))}
      
      </div>
      </div>
    </>
  );
};

export default Todos;
