import React from "react";
import PropTypes from "prop-types";

import "./LinestList.scss";

import { TableViewRow } from "./TableViewRow";

export const LinesList = ({ data, setModalIsOpen, setModalElement }) => {
  return (
    <div className="book-app__table-view">
      {data.map((item, index) => (
        <TableViewRow
          key={`${index}_${item.isbn}`}
          id={item.isbn}
          title={item.title}
          content={item.shortDescription}
          imageUrl={item.thumbnailURL}
          setModalIsOpen={setModalIsOpen}
          setModalElement={setModalElement}
        />
      ))}
    </div>
  );
};

LinesList.defaultProps = {
  data: [],
};

LinesList.propTypes = {
  data: PropTypes.array,
  setModalIsOpen: PropTypes.func.isRequired,
  setModalElement: PropTypes.func.isRequired,
};
