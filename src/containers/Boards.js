import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import styles from "../styles/Styles";
import Board from "./Board";

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
  const boards = useSelector((state) => state.boards.ids);
  return (
    <StyledBoards>
      {boards.map((boardId) => (
        <Board boardId={boardId} key={boardId} />
      ))}
    </StyledBoards>
  );
};

export default Boards;
