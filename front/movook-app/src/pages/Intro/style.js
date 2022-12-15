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

export const IntroMoVookImg = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 43%;
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
  font-style: normal;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 80px;
  letter-spacing: 0.1em;
  color: #fff;
  @media screen and (max-width: 640px) {
    font-size: 2rem;
    line-height: 50px;
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
    props.scrollPosition < 50 ? "#fff" : "#99c9a6"};
  border-radius: 32px;
  color: ${(props) => (props.scrollPosition < 50 ? "#99c9a6" : "#fff")};
  text-align: center;
  line-height: 56px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgb(0 0 0 / 16%), 4px 8px 28px rgb(0 0 0 / 8%);
`;
