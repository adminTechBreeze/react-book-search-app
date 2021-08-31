import React from "react";
import PropTypes from "prop-types";

import "./Card.scss";
import { Button } from "../Button";

export const Card = ({
  id,
  title,
  imageUrl,
  content,
  setModalIsOpen,
  setModalElement,
}) => {
  return (
    <div className="book-app__card-container">
      <div className="book-app__card-container__image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="book-app__card-container__content">
        <div className="book-app__card-container__content__title">{title}</div>
        <div className="book-app__card-container__content__description">
          <p>{content}</p>
        </div>
      </div>
      <div className="book-app__card-container__button-container">
        <Button
          buttonText="View details..."
          onClick={() => {
            setModalIsOpen(true);
            setModalElement(id);
          }}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  content: PropTypes.string,
  setModalIsOpen: PropTypes.func.isRequired,
  setModalElement: PropTypes.func.isRequired,
};

Card.defaultProps = {
  id: null,
  title: "",
  imageUrl: "",
  content: "PropTypes.string",
};
