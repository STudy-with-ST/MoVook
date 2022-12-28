import React, { useState } from "react";
import styled from "styled-components";

const CategoryChange = () => {
  console.log("바뀜");
};

const AutoComplete = () => {
  console.log("인풋 바뀜");
};

const WriteReview = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <select onChange={CategoryChange}>
          <option key="book" value="book">
            책
          </option>
          <option key="movie" value="movie">
            영화
          </option>
        </select>
        <SearchTitle placeholder="Search book or movie" onChange={AutoComplete} />
      </SearchWrapper>
    </Wrapper>
  );
};

export default WriteReview;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: var(--color-background);

  // border: 1px solid red;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  align-items: center;
  justify-content: center;

  border: 3px solid var(--color-primary);
`;

const SearchTitle = styled.input`
  background-color: transparent;
  border: 0px;
  height: 30px;
  width: 60%;
`;
