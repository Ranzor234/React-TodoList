import { css } from "@emotion/core";

export const todo = theme => {
  return css`
    position: relative;

    flex: 1 0 auto;
    text-align: center;

    max-height: 20px;
    margin: 14px 0 0;
    font-family: "Homemade Apple", sans-serif;
    font-size: 14px;

    border-bottom: solid 1px ${theme.color.primary.red};
  `;
};

export const todoText = () => {
  return css`
    height: 20px;
    width: 100%;
    position: absolute;
    left: 51%;
    transform: translate(-50%);
  `;
};
