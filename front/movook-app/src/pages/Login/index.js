import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
import { userApi } from "../../api";
import moment from "moment";
import Cookie from "js-cookie";

const Login = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const [isRememberUser, setRememberUser] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!userId || !userPw) {
      alert("아이디와 비밀번호를 입력해주세요!");
      return;
    }

    const user = {
      user_id: userId,
      password: userPw,
    };

    console.log("[Login] user: ", user);

    // 통신 성공이라면,
    userApi
      .login(user)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.access_token);
        Cookie.set("refreshToken", data.refresh_token);
        localStorage.setItem(
          "expiresAt",
          moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
        );
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.PageTitle>로그인</S.PageTitle>
        <S.Description>
          아직 회원이 아니신가요?
          <S.PageLink to="/join" size="lg">
            회원가입 하기
          </S.PageLink>
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

            <S.Wrapper>
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
              <S.PageLink>비밀번호 찾기</S.PageLink>
            </S.Wrapper>
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
