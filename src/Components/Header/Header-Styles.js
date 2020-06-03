import { css } from "@emotion/core";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = theme => {
  return css`
    width: 52%;
    text-align: center;
    color: ${theme.color.primary.black};
    text-transform: lowercase;
    font-size: 2.2rem;
    margin-top: 30px;
    font-family: "Homemade Apple";
  `;
};
