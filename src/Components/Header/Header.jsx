import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = ({ ShowAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button
        text={showAdd ? "finish" : "Add"}
        onClick={ShowAddToggle}
        align="left"
      />
      <h1 className={styles.headerTitle}>Todo List</h1>
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
