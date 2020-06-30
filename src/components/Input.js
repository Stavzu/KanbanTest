import React from "react";
import styled from "styled-components";
import styles from "../styles/Styles";

const StyledInput = styled.input`
  border: ${styles.color.lightGrey};
  transition: ${styles.transition};
  margin: 0.2rem 0;
  padding: 0.4rem 0;
  width: ${(props) => props.fullWidth && "100%"};
  border-radius: ${styles.borderRadius};
  color: ${(props) => props.inputColor || `${styles.color.myDark}`};
  &[type="text"] {
    padding: 0.2rem 0 0.2rem 0.2rem;
  }
  ::placeholder {
    background: ${styles.color.white};
    padding: 0.2rem;
  }
`;

const Input = ({
  fullWidth,
  onChange,
  placeholder,
  name,
  type,
  value,
  inputColor,
}) => {
  return (
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      inputColor={inputColor}
      fullWidth={fullWidth}
      autoComplete="off"
    />
  );
};

export default Input;
