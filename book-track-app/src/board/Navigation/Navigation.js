import React from "react";
import PropTypes from "prop-types";

import "./Navigation.scss";
import { RoundButton } from "../../components/RoundButton";
import { ToggleButton } from "../../components/ToggleButton";
import { toggleTheme } from "../../utils/utils";

export const Navigation = ({
  isToggled,
  setIsToggled,
  theme,
  setTheme,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="book-app__navigation">
      <div className="book-app__navigation__view-mode">
        <RoundButton
          iconName="cards"
          selected={viewMode === "cards" ? true : false}
          handleOnClick={setViewMode}
        />
        <RoundButton
          iconName="lines"
          selected={viewMode === "lines" ? true : false}
          handleOnClick={setViewMode}
        />
      </div>
      <div className="book-app__navigation__theme-selector">
        <ToggleButton
          isToggled={isToggled}
          onToggle={() => {
            setIsToggled(!isToggled);
            setTheme(toggleTheme(theme));
          }}
          rounded
        />
      </div>
    </div>
  );
};

Navigation.propTypes = {
  isToggled: PropTypes.bool,
  setIsToggled: PropTypes.func.isRequired,
  theme: PropTypes.string,
  setTheme: PropTypes.func.isRequired,
  viewMode: PropTypes.string,
  setViewMode: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  isToggled: false,
  theme: "dark",
  viewMode: "",
};
