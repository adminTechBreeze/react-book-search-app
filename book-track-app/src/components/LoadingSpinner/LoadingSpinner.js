import React from "react";

import { ImSpinner10 } from "react-icons/im";

import "./LoadingSpinner.scss";

export const LoadingSpinner = () => {
  return (
    <div className="book-app_spinner">
      <ImSpinner10 />
    </div>
  );
};
