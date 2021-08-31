import React from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";
import { ImCross } from "react-icons/im";

import "./DetailsModal.scss";

Modal.setAppElement("#root");
export const DetailsModal = ({ isOpen, modalElement, setModalIsOpen }) => {
  const style = {
    overlay: { backgroundColor: "grey" },
  };
  const localModalElement = modalElement && modalElement[0];

  return localModalElement ? (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setModalIsOpen(false);
      }}
      style={style}
    >
      <div
        className="book-app__details-modal__close-button"
        onClick={() => setModalIsOpen(false)}
      >
        <ImCross />
      </div>
      <h2 className="book-app__details-modal__title">
        {localModalElement.title}
      </h2>
      <p>
        <b>Categories:</b> {localModalElement.categories[0]}
      </p>
      <p>
        <b>Authors:</b> {localModalElement.authors[0]}
      </p>
      <p>
        <b>Description:</b> {localModalElement.longDescription}
      </p>
      <img src={localModalElement.thumbnailURL} alt="" />
    </Modal>
  ) : null;
};

DetailsModal.propTypes = {
  isOpen: PropTypes.bool,
  modalElement: PropTypes.array,
  setModalIsOpen: PropTypes.func.isRequired,
};

DetailsModal.defaultPropst = {
  isOpen: false,
  modalElement: null,
};
