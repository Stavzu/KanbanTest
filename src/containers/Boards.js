import React from "react";
import styled from "styled-components";
import styles from "../styles/Styles";
import Board from "./Board";
import { useAppContext } from "../useAppContext";

const StyledBoards = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  > div {
    margin: 1.5rem;
  }
  @media (min-width: ${styles.media.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${styles.media.mobile}) {
    grid-template-columns: repeat(auto-fit, minMax(350px, 400px));
  }
`;

const Boards = () => {
  const { boards } = useAppContext();

  return (
    <StyledBoards>
      {boards.map((boardId) => (
        <Board boardId={boardId} key={boardId} />
      ))}
    </StyledBoards>
  );
};

export default Boards;
