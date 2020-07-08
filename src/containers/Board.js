import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import styles from "../styles/Styles";
import { removeBoard } from "../actions/BoardsActions";
import Card from "./Card";
import Button from "../components/Button";
import { Clear } from "@material-ui/icons";
import CreateCard from "./CreateCard";

const StyledBoard = styled.div`
  background: ${styles.color.white};
  box-shadow: ${styles.boxShadow};
  border-radius: ${styles.borderRadius};
  position: relative;
  padding: 0.8rem;
  h2 {
    font-size: 1.2rem;
    margin: 1.5rem 0.5rem 1rem;
  }
  > button {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
  }
`;

const StyledAddCard = styled.div`
  text-align: right;
  > button {
    background: transparent;
    padding: 0;
    color: ${styles.color.myBlue};
  }
`;

const AddCard = ({ boardId }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <StyledAddCard>
      <div onClick={handleToggle}>
        {toggle ? (
          <Clear />
        ) : (
          <Button
            colorBackground={styles.color.myBlue}
            colorText={styles.color.white}
          >
            Add Card
          </Button>
        )}
      </div>
      {toggle && <CreateCard boardId={boardId} key={boardId} />}
    </StyledAddCard>
  );
};

const Board = ({ boardId }) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boards.entities[boardId]);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBoard(board.id));
  };

  return (
    <StyledBoard>
      <h2>{board.title}</h2>
      <Button type="submit" onClick={handleRemove}>
        Remove board
      </Button>
      <div>
        {board.cards.map((cardId) => {
          return <Card cardId={cardId} key={cardId} />;
        })}
      </div>
      <AddCard boardId={boardId} />
    </StyledBoard>
  );
};

export default Board;
