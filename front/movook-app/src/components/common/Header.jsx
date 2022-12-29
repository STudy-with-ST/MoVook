import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/common/img_logo.png";
import TestUser from "../../assets/img/common/img_user.png";
import { FiLogOut } from "react-icons/fi";
import { userApi } from "../../api";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    userApi
      .logout(localStorage.getItem("loginUser"))
      .then(() => {
        localStorage.clear();
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Wrapper>
        <img src={Logo} alt="logo" width="48px" />
        <LogoTitle>MOVOOK</LogoTitle>
      </Wrapper>
      <Wrapper>
        <Text>Hello, </Text>
        <Text size="lg">{localStorage.getItem("loginUser")}</Text>
        <UserImg src={TestUser} alt="user-img" />
        <FiLogOut size="20" color="#999" onClick={handleLogout} />
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
