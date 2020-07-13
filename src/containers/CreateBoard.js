import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createBoard } from "../actions/BoardsActions";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "../styles/Styles";
import { useAppContext } from "../useAppContext";
import useSetState from "../useSetState";

const StyledMaxLengthBoardText = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const StyledCreateBoardForm = styled.form`
  input,
  button {
    display: block;
  }
  input {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border-bottom: 1.5px solid ${styles.color.myBlue};
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
      max-width: 250px;
      border-bottom: 1.5px solid ${styles.color.myBlue};
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

const CreateBoardForm = () => {
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
    <StyledCreateBoardForm onSubmit={handleSubmit}>
      <Input
        name="title"
        onChange={handleChange}
        placeholder="Write new board title..."
        value={boardTitle.title}
      />
      <Button
        colorBackground={styles.color.myBlue}
        colorText={styles.color.white}
        type="submit"
        disabled={!boardTitle.title}
      >
        Add board
      </Button>
    </StyledCreateBoardForm>
  );
};

const CreateBoard = () => {
  const { boards } = useAppContext();
  const boardsLength = boards.length;
  const maxLength = 4;
  if (boardsLength >= maxLength) {
    return (
      <StyledMaxLengthBoardText>
        No more that {boardsLength} boards please! Be more organized!
      </StyledMaxLengthBoardText>
    );
  }
  return <CreateBoardForm />;
};

export default CreateBoard;
