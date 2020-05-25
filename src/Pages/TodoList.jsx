import React from "react";

import Paper from "../Components/Paper.jsx";
import Header from "../Components/Header.jsx";
import TodoFrom from "../Components/Todo-Form.jsx";
import Todos from "../Components/Todos.jsx";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <TodoFrom />
      <Todos />
    </Paper>
  );
};

export default TodoList;
