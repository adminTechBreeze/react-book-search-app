import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./styles/themes";
import "./App.scss";
import { SearchBar } from "./components/SearchBar";
import { Navigation } from "./board/Navigation";

import { CardsList } from "./board/CardsList";
import { filterAfterString, getElementFromList } from "./utils/utils";
import { LinesList } from "./board/LinesList";
import { getData } from "./utils/api";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { DetailsModal } from "./components/Modal/DetailsModal";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {
  const [theme, setTheme] = useState("light");
  const [isToggled, setIsToggled] = useState(false);
  const [viewMode, setViewMode] = useState("lines");
  const [searchTerm, setSearchTerm] = useState("");
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalElement, setModalElement] = useState(null);

  useEffect(() => {
    getData().then((response) => {
      setIsLoading(false);
      setDataList(response);
    });
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp className="book-app">
        <Navigation
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          theme={theme}
          setTheme={setTheme}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <div className="book-app__search">
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        {isLoading ? <LoadingSpinner /> : null}
        {viewMode === "cards" ? (
          <CardsList
            data={filterAfterString(dataList, searchTerm)}
            setModalIsOpen={setModalIsOpen}
            setModalElement={setModalElement}
          />
        ) : (
          <LinesList
            data={filterAfterString(dataList, searchTerm)}
            setModalIsOpen={setModalIsOpen}
            setModalElement={setModalElement}
          />
        )}
        <DetailsModal
          isOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          modalElement={getElementFromList(
            filterAfterString(dataList, searchTerm),
            modalElement
          )}
        />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
