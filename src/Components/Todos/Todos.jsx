/** @jsx jsx */

// import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

import Todo from "../Todo/Todo.jsx";

// Module Css
// import styles from "./Todos.module.css";

// Emotion
import * as styles from "./Todos.Styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.addPlaceholder}>
          Add Todo by Clicking {""}
          <span css={styles.addPlaceholderButton}>Add</span> Button On The Left
          Corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
