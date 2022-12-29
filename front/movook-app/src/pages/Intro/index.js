import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import Logo from "../../assets/img/common/img_movook.png";
import ThumbnailSlider from "../../components/Intro/ThumbnailSlider.jsx";
import ReviewComponent from "../../components/Intro/ReviewComponent.jsx";
import Title from "../../components/Intro/Title.jsx";
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
        <S.LogoWrapper>
          <S.Logo src={Logo} alt="logo"></S.Logo>
          <S.LogoText>MOVOOK</S.LogoText>
        </S.LogoWrapper>
        <S.ContentsWrapper>
          <S.IntroMoVookImg src={Logo} alt="logo" />
          <Title color="white" text="나만의 MOVOOK 만들기" />
          <S.IntroText>
            내가 본 영화부터 책까지 한번에 기록해보세요!
          </S.IntroText>
        </S.ContentsWrapper>
        <S.StartButton scroll-position={scrollPosition}>
          MOVOOK 시작하기
        </S.StartButton>
      </S.IntroWrapper>
      <ThumbnailSlider id="intro-thumbnail" />
      <ReviewComponent />
    </S.IntroContainer>
  );
};

export default Intro;
