import React from "react";
import styled from "styled-components";
import { useAppContext } from "../useAppContext";
import styles from "../styles/Styles";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  background: ${styles.color.myBlue};
  color: ${styles.color.white};
  text-align: right;
  padding: 0.5rem 0;
  width: 100%;
  span {
    margin: 0.5rem;
  }
`;

const propsBoards = (data) => ({
  count:
    (data.length === 0 && "No boards yet") ||
    (data.length === 1 && `You have only ${data.length} board`) ||
    (data.length >= 2 && `You have ${data.length} boards`),
});

const Footer = () => {
  const { boards } = useAppContext();
  const { count } = propsBoards(boards);

  return (
    <StyledFooter>
      <span>{count}</span>
    </StyledFooter>
  );
};

export default Footer;
