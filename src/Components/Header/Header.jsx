/** @jsx jsx */

// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../Button/Button";

// CSS Module
// import styles from "./Header.module.css";

// Emotion
import * as styles from "./Header-Styles";

const Header = ({ ShowAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "finish" : "Add"}
        onClick={ShowAddToggle}
        align="left"
      />
      <h1 css={styles.headerTitle(theme)}>Todo List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
