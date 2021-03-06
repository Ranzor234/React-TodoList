/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  height,
  minHeight
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    height: ${height};
    min-height: ${minHeight};
  `;

  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "strecth",
  height: "auto",
  minHeight: "initial"
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["wrap", "nowrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-evenly",
    "space-around",
    "start",
    "end",
    "left",
    "right"
  ]),
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "self-start",
    "self-end",
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "last baseline",
    "first baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-evenly",
    "space-around",
    "stretch",
    "baseline",
    "last baseline",
    "first baseline",
    "start",
    "end"
  ]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.string

};

export default Container;
