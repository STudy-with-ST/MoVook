import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import MoVookImg from "../../assets/img/intro/img_intro_movook.png";
import Logo from "../../assets/img/common/img_logo.png";
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
        <S.LogoWrapper>
          <S.Logo src={Logo} alt="logo" />
          <S.LogoText>MOVOOK</S.LogoText>
        </S.LogoWrapper>
        <S.IntroMoVookImg src={MoVookImg} alt="movook" />
        <S.TitleWrapper>
          <S.IntroTitle>내가 본</S.IntroTitle>
          <S.IntroTitle>책부터 영화까지</S.IntroTitle>
          <S.IntroTitle>한번에 기록해보세요!</S.IntroTitle>
          <S.IntroText>
            간단한 검색만으로 빠르게 기록할 수 있는 MOVOOK!
          </S.IntroText>
        </S.TitleWrapper>
        <S.StartButton to="/login" scroll-position={scrollPosition}>
          나만의 MOVOOK 만들기
        </S.StartButton>
      </S.IntroWrapper>
      <ThumbnailSlider id="intro-thumbnail" />
    </S.IntroContainer>
  );
};

export default Intro;
