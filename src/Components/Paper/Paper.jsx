/** @jsx jsx */

// import React from "react";
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

// Css Module
// import styles from "./Paper.module.css";

// Emotion
import * as styles from "./Paper.Styles";

const Paper = ({ children }) => {
  const theme = useTheme();

  return (
    <div css={styles.container(theme)}>
      <div css={styles.frame(theme)}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
