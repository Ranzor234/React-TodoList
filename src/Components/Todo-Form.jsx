import React from "react";
import PropTypes from "prop-types";

const TodoForm = ({ children }) => {
  return (
    <section className="add">
      <form className="add-form">
        <input type="text" className="add-input" />
        <button className="add-btn main-black-color ">Add {children}</button>
      </form>
    </section>
  );
};

TodoForm.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default TodoForm;
