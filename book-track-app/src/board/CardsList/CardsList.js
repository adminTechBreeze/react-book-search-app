import React from "react";
import PropTypes from "prop-types";

import "./CardsList.scss";
import { Card } from "../../components/Card";

export const CardsList = ({ data, setModalIsOpen, setModalElement }) => {
  return (
    <div className="book-app__cards-list">
      {data &&
        data.map((element, index) => (
          <Card
            key={`${index}_${element.isbn}`}
            id={element.isbn}
            title={element.title}
            content={element.shortDescription}
            imageUrl={element.thumbnailURL}
            setModalIsOpen={setModalIsOpen}
            setModalElement={setModalElement}
          />
        ))}
    </div>
  );
};

CardsList.propTypes = {
  data: PropTypes.array,
  setModalIsOpen: PropTypes.func.isRequired,
  setModalElement: PropTypes.func.isRequired,
};

CardsList.defaultProps = {
  data: [],
};
