import React from "react";
import styled from "styled-components";

const Title = ({ text, color = "" }) => {
  return <IntroTitle color={color}>{text}</IntroTitle>;
};
export default Title;

export const IntroTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "S-CoreDream-6Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 80px;
  letter-spacing: 0.08em;
  margin-top: 4rem;
  color: ${(props) =>
    props.color === "white" ? "white" : "var(--color-text)"};
  @media screen and (max-width: 640px) {
    font-size: 2rem;
    line-height: 40px;
  }
`;
