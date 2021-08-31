import React from "react";
import PropTypes from "prop-types";

import "./TableViewRow.scss";

export const TableViewRow = ({
  id,
  title,
  imageUrl,
  content,
  setModalIsOpen,
  setModalElement,
}) => {
  return (
    <div
      className="book-app__table-view__rows__element"
      onClick={() => {
        setModalIsOpen(true);
        setModalElement(id);
      }}
    >
      <div className="book-app__table-view__rows__element__image-container">
        <img src={imageUrl} alt="" width={50} height={70} />
      </div>
      <div className="book-app__table-view__rows__element__title">{title}</div>
      <div className="book-app__table-view__rows__element__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

TableViewRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  content: PropTypes.string,
  setModalIsOpen: PropTypes.func.isRequired,
  setModalElement: PropTypes.func.isRequired,
};

TableViewRow.defaultProps = {
  id: null,
  title: "",
  imageUrl: "",
  content: "",
};
