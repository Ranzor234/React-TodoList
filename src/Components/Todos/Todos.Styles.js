import { css } from "@emotion/core";

export const todos = () => {
  return css`
    display: flex;
    flex-direction: column;

    min-height: 500px;
  `;
};

export const addPlaceHolder = () => {
  return css`
    text-align: center;
    font-family: "Homemade Apple", sans-serif;
    font-size: 14px;
  `;
};

export const addPlaceHolderButton = () => {
  return css`
    font-family: "Bungee";
  `;
};
