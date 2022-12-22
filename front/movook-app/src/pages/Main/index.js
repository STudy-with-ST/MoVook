import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Nav from "../../components/common/Nav";
import Cover from "../../components/Main/Cover";

const Main = () => {
  const workData = [
    {
      id: 10001,
      url: "https://www.themoviedb.org/t/p/w440_and_h660_face/hh1kvVSc1kl3Ub5klMao6Gi5i5Q.jpg",
      type: "movie",
    },
    {
      id: 20001,
      url: "https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg",
      type: "book",
    },
    {
      id: 10002,
      url: "https://www.themoviedb.org/t/p/w440_and_h660_face/7zLHH6LV6rI6emO0z1U8VZDUkjd.jpg",
      type: "movie",
    },
    {
      id: 20002,
      url: "https://image.aladin.co.kr/product/27081/4/cover500/e972538100_1.jpg",
      type: "book",
    },
    {
      id: 20003,
      url: "https://image.aladin.co.kr/product/30707/69/cover500/e172530255_1.jpg",
      type: "book",
    },
    {
      id: 10003,
      url: "https://www.themoviedb.org/t/p/w440_and_h660_face/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
      type: "movie",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <Header />
        <Body>
          <Nav />
          <Left>
            <Selects></Selects>
            <Covers></Covers>
          </Left>
          <Right></Right>
        </Body>
      </Wrapper>
    </Container>
  );
};

{
  /* <Header />;
{
  workData.map((work) => <Cover key={work.id} work={work} />);
} */
}

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #99c9a6;
  height: 5px;
`;

//heigth를 5px 로 줬는데 자식요소 height 퍼센트가 먹는거지

const Wrapper = styled.div`
  display: flex;
  flex-direction: Column;
  height: 90%;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;

const Left = styled.div`
  height: 100%;
  width: 60%;
  border: 1px solid red;
`;

const Right = styled.div`
  height: 100%;
  width: 40%;
  border: 1px solid green;
`;
const Covers = styled.div`
  height: 100%;
  width: 60%;
`;

const Selects = styled.div`
  height: 100px;
  width: 60%;
`;

// 배경색을 저렇게 하는게 맞낭
