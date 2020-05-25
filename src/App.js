import React from "react";
import "./styles.css";

import Paper from "./Components/Paper.jsx";
import Header from "./Components/Header.jsx";
import TodoFrom from "./Components/Todo-Form.jsx";
import Todos from "./Components/Todos.jsx";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoFrom />
      <Todos />
    </Paper>
  );
}
