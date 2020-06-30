import React from "react";
import styled from "styled-components";
import styles from "../styles/Styles";
import { DeleteForever } from "@material-ui/icons";

const StyledButton = styled.button`
  background: ${(props) =>
    (props.colorBackground && props.colorBackground) ||
    (props.removeIcon && "transparent")};
  color: ${(props) =>
    props.colorText ? props.colorText : `${styles.color.myDark}`};
  border: ${styles.color.white};
  width: ${(props) => props.fullWidth && "100%"};
  padding: 0.5rem 2rem;

  border-radius: ${styles.borderRadius};
  opacity: 0.8;
  transition: ${styles.transition};

  &:hover {
    background: ${(props) =>
      props.addIcon || props.removeIcon
        ? "transparent"
        : `${styles.color.myDark}`};

    color: ${styles.color.white};
  }

  &:disabled {
    background: ${styles.color.lightGrey};
    color: ${styles.color.white};
    border: ${styles.color.white};
    opacity: 0.8;
  }
`;

const Button = ({
  type,
  addIcon,
  children,
  disabled,
  onClick,
  colorText,
  colorBackground,
  fullWidth,
  removeIcon,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      removeIcon={removeIcon}
      onClick={onClick}
      colorText={colorText}
      colorBackground={colorBackground}
      fullWidth={fullWidth}
    >
      {children} {removeIcon && <DeleteForever />}
    </StyledButton>
  );
};

export default Button;
