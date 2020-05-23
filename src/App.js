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

/* <section className="header">
  <button className="header-btn main-black-color">Add</button>
  <h1 className="header-title">Todo List</h1>
  <button className="header-btn main-red-color">Clear</button>
</section>;

<section className="add">
  <form className="add-form">
    <input type="text" className="add-input" />
    <button className="add-btn main-black-color ">Add</button>
  </form>
</section>;

<section className="todos"> */
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
//   <div className="todo">
//     <span className="todo-text">Learning React</span>
//   </div>
// </section>
