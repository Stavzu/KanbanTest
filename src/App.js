import React from "react";
import styled from "styled-components";
import styles from "./styles/Styles";
import CreateBoard from "./containers/CreateBoard";
import Boards from "./containers/Boards";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
  background: ${styles.color.myBackground};
  height: 100vh;
  header {
    background: ${styles.color.white};
    padding: 0.5rem;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <header>
          <CreateBoard />
        </header>
        <Boards />
      </StyledApp>
    </>
  );
};

export default App;
