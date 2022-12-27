import React from "react";
import styled from "styled-components";
import { FiGrid, FiCalendar, FiGlobe } from "react-icons/fi";

const Nav = () => {
  return (
    <Container>
      <Circle isClicked={true}>
        <FiGrid size="25" color="white" />
      </Circle>
      <Circle isClicked={false}>
        <FiCalendar size="25" color="black" />
      </Circle>
      <Circle isClicked={false}>
        <FiGlobe size="25" color="black" />
      </Circle>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  width: 100px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  // border: 1px solid red;
  padding: 10px;
`;

const Circle = styled.div`
  width: 48px;
  height: 45px;
  border-radius: 50%;

  background-color: var(--color-primary);
  background-color: ${(props) => (props.isClicked ? `var(--color-primary)` : `transparent`)};

  margin: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
