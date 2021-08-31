import React from "react";
import PropTypes from "prop-types";

import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

import "./SearchBar.scss";

const StyleSearchBar = styled.div`
  input {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }
`;

export const SearchBar = ({ setSearchTerm }) => {
  return (
    <StyleSearchBar className="book-app__search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <span className="book-app__search-bar__search-icon">
        <AiOutlineSearch />
      </span>
    </StyleSearchBar>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
