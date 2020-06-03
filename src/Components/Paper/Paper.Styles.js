import { css } from "@emotion/core";

export const container = theme => {
  return css`
    height: 450px;
    width: 380px;
    background-color: ${theme.color.primary.orange};
    border-radius: 5px;
    padding: 18px;
  `;
};

export const frame = theme => {
  return css`
    border: 1px solid ${theme.color.primary.black};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
};
