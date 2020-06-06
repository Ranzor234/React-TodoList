/** @jsx jsx */

import { jsx } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

import { useTheme } from "emotion-theming";
// Module Css
// import styles from "./todoForm.module.css";

// Emotion
import * as styles from "./TodoForm.Styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("Please Insert The Form !");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter list ");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  const theme = useTheme();

  if (showAdd) {
    return (
      <section className="todoForm-Component">
        <form css={styles.addForm} onSubmit={handleFormSubmit} />
        <Container alignItems="flex-start">
          <Item flex={1} padding="9px 0px 0px 12px">
            <input
              type="text"
              css={styles.addInput(theme)}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </Item>
          <Item>
            {/* <button css={styles.addBtn(theme)}>Add </button> */}
            <Button text="Add" color="black" />
          </Item>
        </Container>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
