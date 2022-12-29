import React from "react";
import styled from "styled-components";
import SelectCategory from "./SelectCategory";
import SelectSort from "./SelectSort";

const SelectGroup = () => {
  return (
    <Wrapper>
      <SelectCategory />
      <SelectSort />
    </Wrapper>
  );
};

export default SelectGroup;

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;
