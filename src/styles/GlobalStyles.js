import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  input, button {
  outline: none;
  cursor: pointer;
}
`;
export default GlobalStyle;
