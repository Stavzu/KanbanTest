import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createBoard } from "../actions/BoardsActions";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/Styles";
import useSetState from "../useSetState";

const StyledForm = styled.form`
  input,
  button {
    display: block;
    text-align: center;
  }
  input {
    width: 100%;
  }
  button {
    margin: auto;
    width: 50%;
  }
  @media (min-width: ${styles.media.mobile}) {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    input {
      max-width: 400px;
      min-width: 50%;
      margin: 0 2rem;
      text-align: left;
    }
    button {
      margin: 0;
      width: auto;
    }
  }
`;

const initialInput = {
  title: "",
};

const CreateBoard = () => {
  const [boardTitle, setBoardTitle] = useSetState(initialInput);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBoardTitle({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBoard(boardTitle));
    setBoardTitle(initialInput);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        name="title"
        onChange={handleChange}
        placeholder="Write new board title..."
        value={boardTitle.title}
      />
      <Button type="submit" disabled={!boardTitle.title}>
        Add board
      </Button>
    </StyledForm>
  );
};

export default CreateBoard;
