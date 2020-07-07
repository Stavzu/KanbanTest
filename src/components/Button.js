import React from "react";
import styled from "styled-components";
import styles from "../styles/Styles";
import { DeleteForever } from "@material-ui/icons";
import { Clear } from "@material-ui/icons";

const StyledButton = styled.button`
  background: ${(props) =>
    (props.colorBackground && props.colorBackground) ||
    props.removeIcon ||
    (props.clear && "transparent")};
  color: ${(props) =>
    props.colorText ? props.colorText : `${styles.color.myDark}`};
  border: ${styles.color.white};
  width: ${(props) => props.fullWidth && "100%"};
  padding: 0.5rem 2rem;
  border-radius: ${styles.borderRadius};
  opacity: 0.8;
  transition: ${styles.transition};

  * &:disabled {
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
  clear,
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
      {children} {removeIcon && <DeleteForever />} {clear && <Clear />}
    </StyledButton>
  );
};

export default Button;
