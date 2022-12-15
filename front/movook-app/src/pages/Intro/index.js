import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import MoVookImg from "../../assets/img/intro/img_intro.png";

import ThumbnailSlider from "../../components/Intro/ThumbnailSlider.jsx";
const Intro = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScrollPosition = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });

  return (
    <S.IntroContainer>
      <S.IntroWrapper>
        <S.IntroMoVookImg src={MoVookImg} alt="movook" />
        <S.TitleWrapper>
          <S.IntroTitle>내가 본</S.IntroTitle>
          <S.IntroTitle>책부터 영화까지</S.IntroTitle>
          <S.IntroTitle>한번에 기록해보세요!</S.IntroTitle>
        </S.TitleWrapper>
        <S.StartButton to="/login" scrollPosition={scrollPosition}>
          나만의 MOVOOK 만들기
        </S.StartButton>
      </S.IntroWrapper>
      <ThumbnailSlider id="intro-thumbnail" />
    </S.IntroContainer>
  );
};

export default Intro;
