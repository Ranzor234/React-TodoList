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

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const setShowAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header ShowAddToggle={setShowAddToggle} showAdd={showAdd} />
      <TodoFrom addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
