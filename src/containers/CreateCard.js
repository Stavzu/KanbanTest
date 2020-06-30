import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCard } from "../actions/CardsActions";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/Styles";

const StyledForm = styled.form`
  background: ${styles.color.apricot};
  padding: 0.5rem;
`;

const initialInput = {
  description: "",
  title: "",
};

const CreateCard = ({ boardId }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialInput);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCard(boardId, input));
    setInput(initialInput);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="title"
        onChange={handleChange}
        placeholder="Title"
        type="text"
        value={input.title}
        fullWidth
      />
      <Input
        name="description"
        onChange={handleChange}
        placeholder="Description"
        type="text"
        value={input.description}
        fullWidth
      />
      <Button
        fullWidth
        type="submit"
        disabled={!input.title || !input.description}
      >
        Add Card
      </Button>
    </StyledForm>
  );
};

export default CreateCard;
