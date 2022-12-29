import React from "react";
import styled from "styled-components";
import Cover from "./Cover";
import { Link } from "react-router-dom";
import { FiBook, FiLock, FiUnlock, FiStar, FiEdit, FiTrash2 } from "react-icons/fi";

const reviewOneData = {
  movie_id: null,

  book_id: "76600",
  book_title: "미드나잇 라이브러리",
  genre: "[SF, 모험, 판타지, 액션]",
  image: "https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg",
  writer: "매트 헤이그 (Matt Haig)",
  company: "인플루엔셜(주)",
  overview:
    "\"이 책들은 네가 살았을 수도 있는 모든 삶으로 들어가는 입구야.\" 더 이상 자신의 하찮고 지질한 삶을 견딜 수 없었던 주인공 노라 시드가 죽기로 결심한 것은 밤 11시 22분. 그가 눈을 뜬 곳은 삶과 죽음 사이의 미스터리한 공간 '미드나잇 라이브러리'. 시간은 자정에서 멈춰 있다. 도서관 사서 엘름 부인의 안내로 노라는 과거에 다른 선택을 했다면 살았을 수도 있는 또 다른 삶을 살아보며, 가장 완벽한 삶을 찾는 모험을 시작한다. 2020년 8월 출간 이후 영국에서만 70만 부 이상 판매되며 영국 아마존 종합 베스트셀러 1위에 올랐고, 미국에서도 아마존, 《뉴욕타임스》 장기 베스트셀러에 오르며 평단과 독자의 열렬한 지지를 받고 있다. SNS로도 독자들과 활발히 소통하는 작가의 팬들답게 #midnightlibrary로 독서 경험을 나누고 있는 전 세계 독자들과 함께해보는 것도 새로운 경험이 될 것이다.",
  original_language: "en",
  vote_average: 8.1,
  popularity: 11276.345,
  adult: false,

  myStar: 2,
  myReview: "이게 무슨 책인가요 저는 몰라요 근데 표지가 좀 예쁘네요",
  private: false,
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

const SpecificBook = () => {
  return (
    <Wrapper>
      <MiddleWrapper>
        <Cover review={reviewOneData} />
        <GenreDirectorWrapper>
          <Title>
            <FiBook /> &nbsp;
            {reviewOneData.book_title}
            &nbsp;
            <LockIcon />
          </Title>
          <Block>
            <SemiTitle>지은이</SemiTitle>
            <Text>{reviewOneData.writer}</Text>
          </Block>
          <Block>
            <SemiTitle>출판사</SemiTitle>
            <Text>{reviewOneData.company}</Text>
          </Block>
        </GenreDirectorWrapper>
      </MiddleWrapper>

      <LastWrapper>
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
          {/* <Link to="/WriteReview"> */}
          <FiTrash2 size="25" color="red" />
          {/* </Link> */}
        </IconWrapper>
        <IconWrapper>
          <FiEdit size="25" />
        </IconWrapper>
      </BtnWrapper>
    </Wrapper>
  );
};

export default SpecificBook;

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
