import React from "react";
import styled from "styled-components";
import Card from "../Review/Card.jsx";
import Title from "./Title";
const ReviewComponent = () => {
  return (
    <ReviewContainer>
      <Title text="후기를 여러 사람들과 공유해보세요" />
      <ReviewWrapper>
        <Card />
        <Card />
        <Card />
      </ReviewWrapper>
    </ReviewContainer>
  );
};

export default ReviewComponent;

const ReviewContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewWrapper = styled.div`
  max-width: 860px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 640px) {
    min-width: 860px;
    overflow-x: scroll;
  }
`;
