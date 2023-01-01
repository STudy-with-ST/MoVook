import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Nav from "../../components/common/Nav";
import SelectGroup from "../../components/Main/SelectGroup";
import Cover from "../../components/Main/Cover";
import WorkCnt from "../../components/Main/WorkCnt";
import SpecificInit from "../../components/Main/SpecificInit";
import SpecificMovie from "../../components/Main/SpecificMovie";
import SpecificBook from "../../components/Main/SpecificBook";
import WriteReview from "../../components/Main/WriteReview";
import CoverAdd from "../../components/Main/CoverAdd";
import axios from "axios";

const Main = () => {
  
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        const response = await axios.get("http://54.180.46.120:80/review/user/aaa");
        console.log(response.data);
        setReviewData(response.data);
      }
      catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log("리뷰데이터", reviewData);
  }, [reviewData]);

  return (
    <Container>
      <Wrapper>
        <Header />
        <Body>
          <Nav />
          <Left>
            <Title>
              <Link to="/">
                <Text>나의 MOVOOK</Text>
              </Link>
              <SelectGroup />
            </Title>
            <CoverWrapper>
              <Link to="/WriteReview">
                <CoverAdd />
              </Link>
              {/* {reviewData.map((review) => (
                <Link to="/SpecificMovie" key={review.review_id}>
                  <Cover review={review} />
                </Link>
              ))} */}
            </CoverWrapper>
          </Left>
          <Right>
            <WorkCnt />
            <Routes>
              <Route path="/" element={<SpecificInit />} />
              <Route path="/SpecificMovie" element={<SpecificMovie />} />
              {/* <SpecificBook /> */}
              <Route path="/WriteReview" element={<WriteReview />} />
            </Routes>
          </Right>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding 0px 96px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  // border: 1px solid blue;
`;

const Left = styled.div`
  height: 100%;
  width: 60%;
  background-color: var(--color-background);
  border-radius: 32px;
  margin: 0px 15px 0px 0px;
  padding: 20px 10px;

  // border: 1px solid red;
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 15px;
  padding: 20px 10px 0px 10px;

  // border: 1px solid green;
`;

const CoverWrapper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  height: 95%;
  width: 100%;

  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-template-rows: 0fr 0fr 0fr;
  // grid-gap: 10px;
  background-color: transparent;

  // border: 1px solid green;
`;

const Title = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // border: 1px solid purple;
`;

const Text = styled.h2`
  font-family: "S-CoreDream-6Bold";
  font-size: 2.5rem;
  margin: 0px 20px;
`;
