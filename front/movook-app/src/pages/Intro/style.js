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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #99c9a6;
  border-bottom-left-radius: 500px;
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
  width: 54px;
`;

export const LogoText = styled(Link)`
  font-size: 1.6rem;
  margin-left: 8px;
`;

export const IntroMoVookImg = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 36%;
  animation: ${bounceIcon} 2s ease infinite;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  max-width: 980px;
  background-color: transparent;
  text-align: start;
  z-index: 1;
`;

export const IntroTitle = styled.h1`
  font-family: "S-CoreDream-6Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 80px;
  letter-spacing: 0.08em;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 3rem;
    line-height: 40px;
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
  font-size: 1.8rem;
  padding-top: 16px;
`;
