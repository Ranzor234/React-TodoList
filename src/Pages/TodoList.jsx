import React, { useState } from "react";

import Paper from "../Components/Paper.jsx";
import Header from "../Components/Header.jsx";
import TodoFrom from "../Components/Todo-Form.jsx";
import Todos from "../Components/Todos.jsx";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React" },
    { text: "Learn Javascript" }
  ]);

  return (
    <Paper>
      <Header />
      <TodoFrom />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
