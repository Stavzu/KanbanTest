import React from "react";
import styled from "styled-components";
import styles from "./styles/Styles";
import CreateBoard from "./containers/CreateBoard";
import Boards from "./containers/Boards";
import GlobalStyle from "./styles/GlobalStyles";

const StyledApp = styled.div`
  header {
    background: ${styles.color.apricot};
    padding: 0.5rem;
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
