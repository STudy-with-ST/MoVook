import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const bounceIcon = keyframes`
  0% {
    transform: translateY(0);    
  }
  50% {
      transform: translateY(-15px);
  }
  100% {
      transform: translateY(0);
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: scroll;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #99c9a6;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 36px;
  left: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 36px;
`;

export const LogoText = styled.label`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.6rem;
  margin-left: 8px;
  color: white;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroMoVookImg = styled.img`
  width: 24%;
  animation: ${bounceIcon} 2s ease infinite;
  @media screen and (max-width: 640px) {
    width: 36%;
  }
`;

export const StartButton = styled(Link)`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 450px;
  min-height: 56px;
  padding: 16px auto;
  z-index: 10;
  background-color: ${(props) =>
    props["scroll-position"] < 50 ? "white" : "var(--color-primary)"};
  border-radius: 32px;
  color: ${(props) =>
    props["scroll-position"] < 50 ? "var(--color-primary)" : "white"};
  font-family: "S-CoreDream-6Bold";
  text-align: center;
  font-size: 1.8rem;
  line-height: 56px;
  box-shadow: 0 4px 12px rgb(0 0 0 / 16%), 4px 8px 28px rgb(0 0 0 / 8%);
`;

export const IntroText = styled.label`
  color: white;
  font-size: 1.9rem;
  padding-top: 16px;
`;
