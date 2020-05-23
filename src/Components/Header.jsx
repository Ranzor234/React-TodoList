import React from "react";
import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color">Add{children}</button>
      <h1 className="header-title">Todo List{children}</h1>
      <button className="header-btn main-red-color">Clear{children}</button>
    </section>
  );
};

Header.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Header;
