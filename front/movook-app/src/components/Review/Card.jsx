import React from "react";
import styled from "styled-components";

const Card = () => {
  return <Container>Card</Container>;
};
export default Card;

const Container = styled.div`
  width: 360px;
  min-height: 512px;
  max-height: 512px;
  background-color: green;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
