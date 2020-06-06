import { css } from "@emotion/core";

export const addInput = theme => {
  return css`
    border: unset;
    background: unset;
    padding: 0 12px;
    width: 100%;

    border-bottom: solid 1px ${theme.color.primary.red};
    outline: unset;

    font-family: "Homemade Apple", sans-serif;
    font-size: 12px;
    text-transform: lowercase;
  `;
};
