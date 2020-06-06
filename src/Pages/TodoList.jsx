import React, { useState } from "react";

import Paper from "../Components/Paper/Paper.jsx";
import Header from "../Components/Header/Header.jsx";
import TodoFrom from "../Components/Todo-Form/Todo-Form.jsx";
import Todos from "../Components/Todos/Todos.jsx";

import Container from "../Layout/Container";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
    { text: "Learn Javascript", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 7) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("No More Than 7 todos");
      return null;
    }
  };

  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const setShowAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="160.5%"
      >
        <Header
          ShowAddToggle={setShowAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoFrom addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
