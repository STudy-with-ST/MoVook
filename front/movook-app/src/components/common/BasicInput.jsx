import React from "react";
import styled from "styled-components";

const BasicInput = ({ text, type, value, onChange, placeholder, readonly }) => {
  return (
    <InputContainer>
      <InputLabel>{text}</InputLabel>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        readOnly={readonly}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default BasicInput;

const InputContainer = styled.div``;

const InputLabel = styled.label`
  display: block;
  font-family: "S-CoreDream-6Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 33px;
  letter-spacing: 0.1em;
`;

const Input = styled.input`
  width: 100%;
  max-height: 80px;
  border: 2px solid var(--color-primary);
  border-radius: 32px;
  padding: 16px;
`;
