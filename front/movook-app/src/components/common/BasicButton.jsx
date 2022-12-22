import React from "react";
import styled from "styled-components";
const BasicButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default BasicButton;

const Button = styled.button`
  width: 100%;
  color: #fff;
  max-height: 80px;
  border-radius: 32px;
  padding: 16px;
  background-color: var(--color-primary);
  font-size: 1.6rem;
  font-weight: 700;
  font-family: "S-CoreDream-6Bold";
  letter-spacing: 0.1em;
  margin: 24px 0px;
`;
