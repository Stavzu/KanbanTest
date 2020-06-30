import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import styles from "../styles/Styles";
import { Button } from "@material-ui/core";
import { removeBoard } from "../actions/BoardsActions";
import { AddCircle } from "@material-ui/icons";
import CreateCard from "./CreateCard";
import Card from "./Card";

const StyledBoard = styled.div`
  background: ${styles.color.apricot};
  background: ${styles.color.lightApricot};
  border: 1px solid ${styles.color.lightApricot};
  border-radius: ${styles.borderRadius};
  position: relative;
  padding: 0.8rem;
  h2 {
    font-size: 1.2rem;
    margin: 1.5rem 0.5rem 1rem;
  }
  > button {
    position: absolute;
    color: ${styles.color.lightApricot};
    background: transparent;
    padding: 1rem;
    top: 0;
    right: 0;
    transition: ${styles.transition};
    &:hover {
      background: transparent;
      color: ${styles.color.myDark};
    }
  }
  > div,
  button {
    margin-top: 0.5rem;
  }
`;

const Board = ({ boardId }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const board = useSelector((state) => state.boards.entities[boardId]);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBoard(board.id));
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <StyledBoard>
      <h2>{board.title}</h2>
      <Button onClick={handleToggle}>
        <AddCircle />
      </Button>
      {toggle && <CreateCard boardId={board.id} />}
      <div>
        {board.cards.map((cardId) => (
          <Card cardId={cardId} />
        ))}
        <Button type="submit" fullWidth onClick={handleRemove}>
          Remove board
        </Button>
      </div>
    </StyledBoard>
  );
};

export default Board;
