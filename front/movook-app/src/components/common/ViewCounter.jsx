import React from "react";
import styled from "styled-components";
const ViewCounter = ({ color, text, count }) => {
  return (
    <Container>
      <Title>{text}</Title>
      <ViewCount color={color}>{count}</ViewCount>
    </Container>
  );
};
export default ViewCounter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 12px;
`;

const Title = styled.h1`
  color: var(--color-text-secondary);
  font-size: 1.2rem;
`;

const ViewCount = styled.div`
  border-left-width: 4px;
  border-style: solid;
  padding-left: 4px;
  margin-top: 8px;
  border-radius: 2px;
  line-height: 20px;
  font-size: 1.5rem;
  border-color: ${(props) => (props.color ? props.color : "#ddd")};
`;
