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

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header />
      <TodoFrom addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
