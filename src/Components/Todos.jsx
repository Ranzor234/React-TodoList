import React from "react";

import Todo from "./Todo.jsx";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Bola"
    },
    {
      text: "Belajar Vuejs"
    },
    {
      text: "Belajar Basket"
    },
    {
      text: "Belajar Javascript"
    },
    {
      text: "Belajar React"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
