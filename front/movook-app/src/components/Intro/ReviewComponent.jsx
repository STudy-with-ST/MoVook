import React from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";
import Title from "./Title";
const ReviewComponent = () => {
  return (
    <ReviewContainer>
      <Title text="후기를 여러 사람들과 공유해보세요" />
      <ReviewWrapper>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </ReviewWrapper>
    </ReviewContainer>
  );
};

export default ReviewComponent;

const ReviewContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
