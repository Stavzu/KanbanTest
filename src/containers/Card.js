import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../actions/CardsActions";
import Button from "../components/Button";
import styles from "../styles/Styles";

const StyledCard = styled.div`
  background: ${styles.color.apricot};
  color: ${styles.color.myDark};
  border: 1px solid ${styles.color.apricot};
  padding: 1em;
  position: relative;
  margin-bottom: 0.5rem;
  border-radius: ${styles.borderRadius};

  h3,
  p {
    font-size: 0.9rem;
  }
  > button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
  }
`;

const Card = ({ cardId, boardId }) => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.cards.entities[cardId]);

  const handleRemove = () => {
    dispatch(removeCard(card.id, boardId));
  };

  return (
    <>
      {card && (
        <StyledCard>
          <h3>{card && card.title}</h3>
          <p>{card && card.description}</p>
          <Button onClick={handleRemove} removeIcon />
        </StyledCard>
      )}
    </>
  );
};

export default Card;
