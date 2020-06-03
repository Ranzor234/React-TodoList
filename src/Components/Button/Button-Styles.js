import { css } from "@emotion/core";

export const button = ({ color, align, theme }) => {
  let textColor;

  const {
    color: { primary }
  } = theme;

  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
  }

  return css`
    width: 24%;
    font-size: 1.4rem;
    outline: unset;
    color: ${textColor};
    text-align: ${align};

    background-color: unset;
    border: unset;
    font-family: "Bungee";
    cursor: pointer;
    padding: 12px;
  `;
};
