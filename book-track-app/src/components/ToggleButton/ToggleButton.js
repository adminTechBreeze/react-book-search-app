import React from "react";
import PropTypes from "prop-types";

import "./ToggleButton.scss";
import { mergeCssClass } from "../../utils/utils";

export const ToggleButton = ({
  rounded = false,
  className,
  isToggled,
  onToggle,
}) => {
  return (
    <label className="book-app__toggle-button">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span
        className={mergeCssClass(
          "book-app__toggle-button__slider",
          rounded ? "rounded" : "",
          className
        )}
      ></span>
    </label>
  );
};

ToggleButton.propTypes = {
  rounded: PropTypes.bool,
  className: PropTypes.string,
  isToggled: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
  rounded: false,
  className: "",
  isToggled: false,
};
