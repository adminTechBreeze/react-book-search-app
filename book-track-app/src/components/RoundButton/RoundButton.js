import React from "react";
import PropTypes from "prop-types";

import "./RoundButton.scss";

import { AiOutlineMenu, AiOutlineTable } from "react-icons/ai";
import { mergeCssClass } from "../../utils/utils";

export const RoundButton = ({ iconName, selected, handleOnClick }) => {
  return (
    <div
      className={mergeCssClass(
        "book-app__round-button",
        selected ? "selected" : ""
      )}
      onClick={() => handleOnClick(iconName)}
    >
      {iconName === "lines" ? <AiOutlineMenu /> : <AiOutlineTable />}
    </div>
  );
};

RoundButton.propTypes = {
  iconName: PropTypes.string,
  selected: PropTypes.bool,
  handleOnClick: PropTypes.func.isRequired,
};

RoundButton.defaultProps = {
  iconName: "",
  selected: false,
};
