import React from "react";

import AddTodo from "./app/components/AddTodo";
import Todos from "./app/components/Todos";

const App = () => {
  
  return (
    <>
   <h1 style={{color:"white",display:"flex",justifyContent:"center"}}>Redux Todo List</h1>
  <AddTodo/>
  <Todos/>
    </>
  );
};

export default App;
