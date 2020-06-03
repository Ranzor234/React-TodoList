/** @jsx jsx */

// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import cx from "classnames";

// import styles from "./Button.module.css";
import * as styles from "./Button-Styles";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "right" && "align-right",
  //   align === "left" && "align-left"
  // ].join(" ");

  // CSS Module

  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignRight]: align === "right",
  //   [styles.alignLeft]: align === "left"
  // });

  return (
    // Using CSS Module

    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>

    // Using Emotion

    <button css={styles.button({ align, color })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "Black"
};

Button.proptypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["right", "left"])
};

export default Button;
