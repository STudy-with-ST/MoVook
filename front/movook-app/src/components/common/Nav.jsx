import React from "react";
import styled from "styled-components";
import { FiGrid, FiCalendar, FiGlobe } from "react-icons/fi";

const Nav = () => {
  return (
    <Container>
      <Circle>
        <FiGrid size="25" color="black" />
      </Circle>
      <Circle>
        <FiCalendar size="25" color="black" />
      </Circle>
      <Circle>
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

  margin: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
