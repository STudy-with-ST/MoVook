import React from "react";
import styled from "styled-components";

const sortChange = () => {
  console.log("정렬기준 변경됨");
};

const SelectSort = () => {
  return (
    <Wrapper>
      <Label>Sort</Label>
      <select onChange={sortChange}>
        <option key="star" value="star">
          별점 순
        </option>
        <option key="sdate" value="sdate">
          등록일 순
        </option>
      </select>
    </Wrapper>
  );
};

export default SelectSort;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  justify-content: right;

  // border: 1px solid pink;
`;

const Label = styled.div`
  justify-content: right;
`;
