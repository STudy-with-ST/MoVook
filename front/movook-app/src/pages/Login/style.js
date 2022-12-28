import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const LoginFormContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const PageTitle = styled.h1`
  font-family: "S-CoreDream-6Bold";
  width: 100%;
  max-width: 540px;
  min-width: 340px;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 43px;
  letter-spacing: 0.1em;
  text-align: start;
  margin-bottom: 8px;
  @media screen and (max-width: 640px) {
    margin-top: 36px;
  }
`;

export const Description = styled.label`
  font-family: "S-CoreDream-6Bold";
  width: 100%;
  max-width: 540px;
  min-width: 340px;
  text-align: start;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: 0.1em;
  margin-bottom: 4rem;
`;

export const PageLink = styled(Link)`
  color: var(--color-primary);
  font-size: ${(props) => (props.size === "lg" ? "1.7rem" : "1.26rem")};
  font-family: "S-CoreDream-6Bold";
  justify-self: flex-end;
  margin-left: 4px;
`;

export const FormWrapper = styled.div`
  max-width: 540px;
  min-width: 340px;
  width: 100%;
  margin: 0px auto;
  background-color: transparent;
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    position: absolute;
    top: -300px;
    right: 1rem;
    width: 72%;
  }
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 50%;
  &:checked {
    background-color: var(--color-primary);
  }
`;

export const Text = styled.label`
  font-size: 1.26rem;
  margin-left: 8px;
`;
export const RememberUserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;