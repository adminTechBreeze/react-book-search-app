import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#1f2124",
};

export const darkTheme = {
  body: "#1f2124",
  fontColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
