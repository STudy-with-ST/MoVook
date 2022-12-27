import React from "react";
import styled from "styled-components";

const ReviewItem = () => {
  return <Container>reviewItem</Container>;
};

export default ReviewItem;

const Container = styled.div`
  width: 100%;

  max-width: 380px;
  max-height: 540px;

  height: 100%;
  background: white;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  margin: 0px 8px;
  @media screen and (max-width: 640px) {
    margin: 8px 16px;
    width: 260px;
    height: 320px;
  }
`;
