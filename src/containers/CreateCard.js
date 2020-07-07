import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCard } from "../actions/CardsActions";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/Styles";
import useSetState from "../useSetState";

const StyledForm = styled.form`
  background: ${styles.color.gray};
  padding: 0.5rem;
`;

const initialInput = {
  description: "",
  title: "",
};

const CreateCard = ({ boardId }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useSetState(initialInput);

  const handleChange = (e) => {
    setInput({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCard(boardId, input));
    clear();
  };

  const clear = () => {
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
        colorBackground={styles.color.myBlue}
        colorText={styles.color.white}
        type="submit"
        disabled={!input.title || !input.description}
      >
        Add
      </Button>
    </StyledForm>
  );
};

export default CreateCard;
