import React from "react";
import styled from "styled-components";
// import SelectIcon from "./SelectIcon";

const categoryChange = () => {
  console.log("카테고리 변경됨");
};

const SelectCategory = () => {
  return (
    <Wrapper>
      <Label>Category</Label>
      <select onChange={categoryChange}>
        <option key="movie" value="movie">
          <Text>영화</Text>
        </option>
        <option key="book" value="book">
          <Text>책</Text>
        </option>
      </select>
    </Wrapper>
  );
};

export default SelectCategory;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;

  margin: 0px 20px;

  border: 1px solid pink;
`;

const Label = styled.div`
  justify-content: right;
`;

const Text = styled.text`
  font-family: "S-CoreDream-6Bold";
  font-size: 1.5rem;
`;
