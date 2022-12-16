import React from "react";
import styled, { css, keyframes } from "styled-components";
import Book1 from "../../assets/img/intro/img_intro_books1.png";
import Book2 from "../../assets/img/intro/img_intro_books2.png";
import Movie from "../../assets/img/intro/img_intro_movies1.png";
import Title from "./Title";
const ThumbnailSlider = () => {
  return (
    <ThumbnailContainer>
      <ContentWrapper>
        <Title text="책부터 영화까지 한번에 기록해보세요!" />
        <Books type="book" contents={Book1} />
        <Books type="movie" contents={Movie} />
        <Books type="book" contents={Book2} />
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
  background: url(${(props) => (props.contents ? props.contents : "")}) 0/3000px
    repeat-x;
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
