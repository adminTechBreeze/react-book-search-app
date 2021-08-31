import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export const Button = ({ buttonText, onClick }) => {
  return (
    <div className="book-app__button" onClick={onClick}>
      {buttonText}
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = { buttonText: "" };
