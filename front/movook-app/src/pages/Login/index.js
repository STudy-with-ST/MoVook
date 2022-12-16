import React from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
const Login = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const handleOnClick = (e) => {
    e.preventDefault();

    const user = {
      id: userId,
      password: userPw,
    };
    console.log("user: ", user);
  };
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.PageTitle>Sign In</S.PageTitle>
        <S.Description>
          Don’t have a account, <S.PageLink to="/join">Sign Up</S.PageLink>
        </S.Description>
        <S.FormWrapper>
          <form method="POST">
            <BasicInput
              id="input-id"
              text="ID"
              placeholder="Enter Your ID"
              type="text"
              value={userId}
              onChange={onChangeUserId}
            />
            <BasicInput
              text="Password"
              placeholder="Enter Your Password"
              type="password"
              value={userPw}
              onChange={onChangeUserPw}
            />
            <BasicButton text="로그인" onClick={handleOnClick} />
          </form>
        </S.FormWrapper>
      </S.LoginFormContainer>
      <S.ImgContainer>
        <img src={MovookImg} width="60%" alt="movook" />
      </S.ImgContainer>
    </S.LoginContainer>
  );
};

export default Login;
