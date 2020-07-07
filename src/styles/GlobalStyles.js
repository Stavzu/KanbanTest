import { createGlobalStyle } from "styled-components";
import styles from "./Styles";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: ${styles.color.myDark};
  }
  input, button {
  outline: none;
  cursor: pointer;
}
`;
export default GlobalStyle;
