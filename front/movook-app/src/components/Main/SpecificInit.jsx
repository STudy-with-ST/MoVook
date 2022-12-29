import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/common/img_logo.png";
import { FiPlus } from "react-icons/fi";

const SpecificInit = () => {
  return (
    <Wrapper>
      <LogoImg src={Logo} />
      <Text>
        작품 표지를 눌러 내가 기록한 감상평을 확인하거나,
        <br />
        <FiPlus />
        버튼을 눌러 감상한 작품을 기록해보세요!
      </Text>
    </Wrapper>
  );
};

export default SpecificInit;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // border: 1px solid red;
`;

const LogoImg = styled.img`
  width: 30%;
  margin: 20px;
`;

const Text = styled.h2`
  font-family: S-CoreDream-6Bold;
  font-size: 150%;
`;
