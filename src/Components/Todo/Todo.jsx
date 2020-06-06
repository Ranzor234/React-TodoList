/** @jsx jsx */

// import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

// import Container from "../../Layout/Container";
// import Item from "../../Layout/Item";

// Module Css
// import styles from "./Todo.module.css";

// Emotion
import * as styles from "./Todo.module";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();

  return (
    <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
      <span
        css={styles.todoText}
        style={{
          textDecoration: isCompleted ? "line-through" : "initial"
        }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
