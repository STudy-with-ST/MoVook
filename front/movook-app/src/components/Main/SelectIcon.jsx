import React from "react";
import styled from "styled-components";

const SelectIcon = () => {
  return (
    <IconSVG width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14L16 6H4L10 14Z" fill="#1A1A1A" />
    </IconSVG>
  );
};

export default SelectIcon;

const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;
