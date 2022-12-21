import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/common/img_logo.png";
import TestUser from "../../assets/img/common/img_user.png";
import ViewCounter from "./ViewCounter";
import { FiLogOut } from "react-icons/fi";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="logo" width="48px" />
        <LogoTitle>MOVOOK</LogoTitle>
      </Wrapper>
      {/* <Wrapper>
        <ViewCounter color="pink" text="읽은 도서" count="2" />
        <ViewCounter color="pink" text="시청한 영화" count="3" />
        <ViewCounter color="pink" text="총 작품 수" count="5" />
      </Wrapper> */}
      <Wrapper>
        <Text>Hello, </Text>
        <Text size="lg">TaeBong</Text>
        <UserImg src={TestUser} alt="user-img" />
        <FiLogOut size="20" color="#999" />
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 64px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h2`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
  margin-left: 4px;
`;

const Text = styled.label`
  font-family: ${(props) =>
    props.size === "lg" ? "S-CoreDream-6Bold" : "S-CoreDream-4Regular"};
  font-size: ${(props) => (props.size === "lg" ? "1.6rem" : "1.4rem")};
  margin-right: 4px;
`;

const UserImg = styled.img`
  width: 36px;
  margin: 0px 12px;
`;
