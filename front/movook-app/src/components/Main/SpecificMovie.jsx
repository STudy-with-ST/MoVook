import React from "react";
import styled from "styled-components";
import Cover from "./Cover";
import { FiFilm, FiLock, FiUnlock, FiStar, FiEdit, FiTrash2 } from "react-icons/fi";

const reviewOneData = {
  movie_id: "76600",
  movie_title: "아바타: 물의 길",
  genre: "[SF, 모험, 판타지, 액션]",
  image: "https://image.tmdb.org/t/p/original/z56bVX93oRG6uDeMACR7cXCnAbh.jpg",
  director: "제임스 카메론",
  actor: "조 샐다나, 샘 워싱턴, 시고니 위버, 우나 채플린, 지오바니 리비시, 스티븐 랭, 케이트 윈슬렛",
  overview:
    "판도라 행성에서 제이크 설리와 네이티리가 이룬 가족이 겪게 되는 무자비한 위협과 살아남기 위해 떠나야 하는 긴 여정과 전투, 그리고 견뎌내야 할 상처에 대한 이야기를 그렸다.",
  released_date: "2022-12-14",
  original_language: "en",
  vote_average: 8.1,
  popularity: 11276.345,
  adult: false,

  myStar: 4,
  myReview:
    "너무 재밌게 봤습니다. 시간 가는줄 몰랐습니다. 여주가 너무 매력적입니다. 팀 버튼은 최고입니다. 시즌 2가 기다려집니다. 하하.",
  private: true,
};

const LockIcon = () => {
  return reviewOneData.private ? <FiLock size="15" color="#999" /> : <FiUnlock size="15" color="#999" />;
};

const StarIcon = () => {
  const renderReviewStar = (n) => {
    const stars = [];
    for (let i = 0; i < n; i++) {
      stars.push(<FiStar key={i} size="20" color="#E5D85C" style={{ fill: "#E5D85C" }} />);
    }
    return stars;
  };

  return renderReviewStar(reviewOneData.myStar);
};

const SpeificMovie = () => {
  return (
    <Wrapper>
      <MiddleWrapper>
        <Cover review={reviewOneData} />
        <GenreDirectorWrapper>
          <Title>
            <FiFilm /> &nbsp;
            {reviewOneData.movie_title}
            &nbsp;
            <LockIcon />
          </Title>
          <Block>
            <SemiTitle>장르</SemiTitle>
            <Text>{reviewOneData.genre}</Text>
          </Block>
          <Block>
            <SemiTitle>개봉일</SemiTitle>
            <Text>{reviewOneData.released_date}</Text>
          </Block>
          <Block>
            <SemiTitle>감독</SemiTitle>
            <Text>{reviewOneData.director}</Text>
          </Block>
        </GenreDirectorWrapper>
      </MiddleWrapper>

      <LastWrapper>
        <Block>
          <SemiTitle>출연진</SemiTitle>
          <Text>{reviewOneData.actor}</Text>
        </Block>
        <Block>
          <SemiTitle>줄거리</SemiTitle>
          <Text>{reviewOneData.overview}</Text>
        </Block>
        <Block>
          <SemiTitle>나의 평가</SemiTitle>
          <StarIcon />
          <Text>{reviewOneData.myReview}</Text>
        </Block>
      </LastWrapper>

      <BtnWrapper>
        <IconWrapper>
          <FiTrash2 size="25" color="red" />
        </IconWrapper>
        <IconWrapper>
          <FiEdit size="25" />
        </IconWrapper>
      </BtnWrapper>
    </Wrapper>
  );
};

export default SpeificMovie;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: var(--color-background);

  // border: 1px solid red;
`;

const MiddleWrapper = styled.div`
  margin: 15px 15px 0px 15px;
  height: 280px;
  display: flex;
  flex-direction: row;

  // border: 1px solid red;
`;

const LastWrapper = styled.div`
  margin: 0px 20px 0px 20px;
  overflow: auto;

  // border: 1px solid red;
`;

const GenreDirectorWrapper = styled.div`
  width: 100%;
  height: 250;
  margin: 15px 0px;

  // border: 1px solid green;
`;

const Block = styled.div`
  width: 100%;
  margin: 5% 0;

  // border: 1px solid black;
`;

const BtnWrapper = styled.div`
  height: 50px;
  margin: 0 15px 0px 15px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  // border: 1px solid purple;
`;

const Title = styled.h1`
  font-family: S-CoreDream-6Bold;
  font-size: 200%;
`;

const SemiTitle = styled.h2`
  font-family: S-CoreDream-6Bold;
  font-size: 150%;
  line-height: 200%;
`;

const Text = styled.h2`
  font-size: 150%;
  line-height: 120%;
`;

const IconWrapper = styled.div`
  margin: 10px;

  // border: 1px solid red;
`;
