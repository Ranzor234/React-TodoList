import React from "react";
import PropTypes from "prop-types";

const Todos = ({ children }) => {
  return (
    <section className="todos">
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
      <div className="todo">
        <span className="todo-text">Learning React {children}</span>
      </div>
    </section>
  );
};

Todos.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Todos;
