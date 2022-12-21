import React from "react";
import styled from "styled-components";

const Card = () => {
  return <Container>Card</Container>;
};
export default Card;

const Container = styled.div`
  width: 300px;
  min-height: 412px;
  background-image: url("https://www.themoviedb.org/t/p/w440_and_h660_face/hh1kvVSc1kl3Ub5klMao6Gi5i5Q.jpg");
  background-position: center center;
  background-size: contain;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;
