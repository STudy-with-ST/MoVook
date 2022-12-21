import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Flip>
      <Container>
        <CardFront>
          <CardImg
            src="https://www.themoviedb.org/t/p/w440_and_h660_face/hh1kvVSc1kl3Ub5klMao6Gi5i5Q.jpg"
            alt="img"
          />
        </CardFront>
        <CardBack>뒷면</CardBack>
      </Container>
    </Flip>
  );
};
export default Card;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  border-radius: 16px;
  display: flex;
  color: black;
  flex-direction: column;
  background-color: pink;
`;

const CardImg = styled.img`
  width: 300px;
  height: 412px;
  border-radius: 16px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 412px;
  backface-visibility: hidden;
  margin: 1rem;
  border-radius: 16px;
  font-size: 2rem;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  background: #ffffff;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
`;

const Flip = styled.div`
  position: relative;
  width: 300px;
  min-height: 412px;
  perspective: 1100px;
  &:hover {
    ${Container} {
      transform: rotateY(180deg);
    }
  }
`;
