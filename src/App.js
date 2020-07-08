import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import styles from "./styles/Styles";
import CreateBoard from "./containers/CreateBoard";
import Boards from "./containers/Boards";
import GlobalStyle from "./styles/GlobalStyles";
import Footer from "./containers/Footer";
import Context from "./context";

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
  const boards = useSelector((state) => state.boards.ids);
  return (
    <>
      <Context.Provider value={{ boards }}>
        <GlobalStyle />
        <StyledApp>
          <header>
            <CreateBoard />
          </header>
          <Boards />
          <Footer />
        </StyledApp>
      </Context.Provider>
    </>
  );
};

export default App;
