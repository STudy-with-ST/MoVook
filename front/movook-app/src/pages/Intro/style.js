import styled from "styled-components";

export const IntroContainer = styled.div`
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
