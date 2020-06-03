import { css } from "@emotion/core";

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#2d2d2d";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#2d2d2d";
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
