import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import "./AddTodo.scss";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="main">
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          className="top"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" type="submit">Add to do</button>
      </div>
    </form>
  );
};

export default AddTodo;
