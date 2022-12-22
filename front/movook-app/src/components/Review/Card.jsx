import React from "react";
import styled from "styled-components";
import TestUser from "../../assets/img/common/img_user.png";
const Card = () => {
  const urls = [
    "https://www.themoviedb.org/t/p/w440_and_h660_face/7zLHH6LV6rI6emO0z1U8VZDUkjd.jpg",
    "https://www.themoviedb.org/t/p/w440_and_h660_face/hh1kvVSc1kl3Ub5klMao6Gi5i5Q.jpg",
  ];
  return (
    <Flip>
      <Container>
        <CardFront>
          <CardImg src={urls[0]} alt="img" />
        </CardFront>
        <CardBack>
          <Title>소장하고 싶은 책표지 디자인</Title>
          <span>
            <Text type="bold">저자</Text>
            <Text>네모네모</Text>
          </span>
          <span>
            <Text type="bold">출판사</Text>
            <Text>세모세모</Text>
          </span>
          <Review>
            이 별이 별 까닭입니다. 이 그리워 애기 하나 북간도에 속의 가을
            봅니다. 계집애들의 하나의 때 까닭입니다. 아침이 프랑시스 이름과,
            까닭입니다. 둘 이름과 사람들의 봄이 헤일 까닭입니다. 이네들은
            이름과, 새겨지는 무성할 있습니다. 추억과 파란 별 아직 하나에 동경과
            노루, 까닭입니다. 별 나는 아직 별 릴케 다 불러 별 까닭입니다. 보고,
            언덕 소녀들의 봅니다. 파란 어머니, 오면 멀리 걱정도 아직 별이
            어머님, 같이 까닭입니다.
          </Review>
          <UserWrapper>
            <UserImg src={TestUser} alt="user" />
            <UserId> 안태봉 </UserId>
            <RegDate>2022.12.24</RegDate>
          </UserWrapper>
        </CardBack>
      </Container>
    </Flip>
  );
};
export default Card;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 370px;
  backface-visibility: hidden;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  border-radius: 16px;
  display: flex;
  color: black;
  flex-direction: column;
  background-color: pink;
`;

const CardImg = styled.img`
  width: 260px;
  height: 370px;
  border-radius: 16px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 370px;
  backface-visibility: hidden;
  margin: 1rem;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  background: #ffffff;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.1);
`;

const Flip = styled.div`
  position: relative;
  width: 260px;
  height: 370px;
  perspective: 1100px;
  &:hover {
    ${Container} {
      transform: rotateY(180deg);
    }
  }
`;

const Title = styled.h1`
  font-family: "S-CoreDream-6Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 29px;
`;

const Text = styled.label`
  font-family: ${(props) =>
    props.type === "bold" ? "S-CoreDream-6Bold" : "S-CoreDream-4Regular"};
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 19px;
  margin-right: ${(props) => (props.type === "bold" ? "8px" : "0px")};
`;
const Review = styled.div`
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
  margin-top: 16px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 0px 16px;
  border-top: 1px solid #f4f4f4;
  width: 100%;
  min-height: 4.25rem;
  background-color: transparent;
  position: absolute;
  bottom: 16px;
  left: 0px;
`;

const UserImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const UserId = styled.label`
  font-size: 1.125rem;
  font-family: "S-CoreDream-6Bold";
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem;
`;

const RegDate = styled.p`
  position: absolute;
  right: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188rem;
  color: var(--color-text-secondary);
  text-align: end;
`;
