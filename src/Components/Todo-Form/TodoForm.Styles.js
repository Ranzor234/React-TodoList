import { css } from "@emotion/core";

export const add = () => {
  return css`
    padding: 12px;
  `;
};

export const addForm = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const addInput = theme => {
  return css`
    border: unset;
    background: unset;
    padding: 0 12px;

    flex: 1;

    border-bottom: solid 1px ${theme.color.primary.red};
    outline: unset;

    font-family: "Homemade Apple", sans-serif;
    font-size: 12px;
    text-transform: lowercase;
  `;
};

export const addBtn = theme => {
  return css`
    background: unset;
    outline: unset;
    border: unset;

    font-size: 1.4rem;
    font-family: "Bungee";

    padding: 2px;
    padding-right: unset;
    cursor: pointer;
    && :active {
      text-shadow: 1px 1px 2px ${theme.color.primary.black};
    }
  `;
};
