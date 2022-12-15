import React from "react";
import styled, { css, keyframes } from "styled-components";
import Book1 from "../../assets/img/intro/img_intro_books1.png";
import Book2 from "../../assets/img/intro/img_intro_books2.png";
const ThumbnailSlider = () => {
  return (
    <ThumbnailContainer>
      <Title>나만의 아카이브를 직접 만들어보세요!</Title>
      <ContentWrapper>
        <Books type="book" />
        <Books type="movie" />
        <Books type="book" />
      </ContentWrapper>
    </ThumbnailContainer>
  );
};

export default ThumbnailSlider;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  background-color: transparent;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 80px;
  letter-spacing: 0.1em;
  color: #333;
  background-color: transparent;
  text-align: center;
  margin: 36px 0px;
  @media screen and (max-width: 640px) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const rotateBooks = keyframes`
    0% {
      background-position: 0px;
    }
    100% {
      background-position: -3000px;
    }
`;

const rotateMovies = keyframes`
    0% {
      background-position: -3000px;
    }
    100% {
      background-position: 0px;
    }
`;

const Books = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: -100px;
  background-position: 0;
  background: url(${Book1}) 0/3000px repeat-x;
  background-size: 2800px;
  background-position: 0 0;
  animation: ${(props) =>
    props.type === "book"
      ? css`
          ${rotateBooks} 100s linear infinite
        `
      : css`
          ${rotateMovies} 100s linear infinite
        `};
`;
