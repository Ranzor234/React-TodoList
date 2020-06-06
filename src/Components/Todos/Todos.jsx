/** @jsx jsx */

// import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";

import Todo from "../Todo/Todo.jsx";

import Container from "../../Layout/Container";

// Module Css
// import styles from "./Todos.module.css";

// Emotion
import * as styles from "./Todos.Styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <div css={styles.addPlaceHolder}>
            Add Todo by Clicking {""}
            <span css={styles.addPlaceHolderButton}>Add</span> Button On The
            Left Corner
          </div>
        )}
      </Container>
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
