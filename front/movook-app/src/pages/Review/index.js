import React from "react";
import Card from "../../components/Review/Card";
import Header from "../../components/common/Header";
import * as S from "./style";
const Review = () => {
  return (
    <S.Container>
      <Header />
      <S.CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Review;
