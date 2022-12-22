import React, { useState } from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
const Login = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const [isRememberUser, setRememberUser] = useState(false);
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
        <S.PageTitle>로그인</S.PageTitle>
        <S.Description>
          아직 회원이 아니신가요?{" "}
          <S.PageLink to="/join">회원가입 하기</S.PageLink>
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

            <S.RememberUserWrapper>
              <S.CheckBox
                type="checkbox"
                name="auto-login"
                id="auto-login"
                defaultChecked={isRememberUser}
                onChange={() => setRememberUser((prev) => !prev)}
              />
              <S.Text htmlFor="auto-login">아이디 기억하기</S.Text>
            </S.RememberUserWrapper>
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
