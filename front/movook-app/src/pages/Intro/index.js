import React from "react";
import * as S from "./style.js";
import MoVookImg from "../../assets/img/intro/img_intro.png";
import { Link } from "react-router-dom";
import ThumbnailSlider from "../../components/Intro/ThumbnailSlider.jsx";
const Intro = () => {
  return (
    <S.IntroContainer>
      <S.IntroWrapper>
        <S.IntroMoVookImg src={MoVookImg} alt="movook" />
        <S.TitleWrapper>
          <S.IntroTitle>내가 본</S.IntroTitle>
          <S.IntroTitle>책부터 영화까지</S.IntroTitle>
          <S.IntroTitle>한번에 기록해보세요!</S.IntroTitle>
        </S.TitleWrapper>
        <Link to="/login">MOVOOK 시작하기</Link>
      </S.IntroWrapper>
      <ThumbnailSlider />
    </S.IntroContainer>
  );
};

export default Intro;
