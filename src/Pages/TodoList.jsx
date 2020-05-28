import React, { useState } from "react";

import Paper from "../Components/Paper.jsx";
import Header from "../Components/Header.jsx";
import TodoFrom from "../Components/Todo-Form.jsx";
import Todos from "../Components/Todos.jsx";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Learn Javascript", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const setShowAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header ShowAddToggle={setShowAddToggle} showAdd={showAdd} />
      <TodoFrom addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
