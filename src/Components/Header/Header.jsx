/** @jsx jsx */

// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../Button/Button";
import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

// CSS Module
// import styles from "./Header.module.css";

// Emotion
import * as styles from "./Header-Styles";

const Header = ({ ShowAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button
            text={showAdd ? "finish" : "Add"}
            onClick={ShowAddToggle}
            align="left"
          />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo List</h1>
        </Item>
        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
