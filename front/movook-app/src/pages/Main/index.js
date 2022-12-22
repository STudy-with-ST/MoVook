import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Nav from "../../components/common/Nav";
import SelectGroup from "../../components/Main/SelectGroup";
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
            <Title>
              <Text>나의 MOVOOK</Text>
              <SelectGroup />
            </Title>
            <CoverWrapper>
              {workData.map((work) => (
                <Cover work={work} key={work.id} />
              ))}
            </CoverWrapper>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding 0px 96px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: Column;
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
  margin: 0px 0px 0px 15px;
  padding: 20px 10px;

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

  border: 1px solid green;
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
