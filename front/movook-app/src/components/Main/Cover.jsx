import React from "react";
import styled from "styled-components";

const Cover = ({ work }) => {
  return <Poster work={work} src={work.url} alt="이미지" />;
};

export default Cover;

const Poster = styled.img`
  height: 250px;
  width: 170px;
  border-radius: ${(props) => (props.work.type === "book" ? "15px" : "0px")};
  box-shadow: 0 4px 5px 1px gray;
  margin: 10px;
`;
