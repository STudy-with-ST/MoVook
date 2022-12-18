import React from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
const Join = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const [userName, onChangeUserName] = useInput("");
  const [userConfirmPw, onChangeUserConfirmPw] = useInput("");

  const handleOnClick = (e) => {
    e.preventDefault();

    const createdUser = {
      id: userId,
      name: userName,
      password: userPw,
    };
    console.log("createdUser: ", createdUser);
  };
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.PageTitle>Sign Up</S.PageTitle>
        <S.FormWrapper>
          <form method="POST">
            <BasicInput
              id="input-name"
              text="Name"
              placeholder="Enter Your Name"
              type="text"
              value={userName}
              onChange={onChangeUserName}
            />
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
            <BasicInput
              text="Password"
              placeholder="Enter Your Confirm Password"
              type="Confirm password"
              value={userConfirmPw}
              onChange={onChangeUserConfirmPw}
            />
            <BasicButton text="회원가입" onClick={handleOnClick} />
          </form>
        </S.FormWrapper>
      </S.LoginFormContainer>
      <S.ImgContainer>
        <img src={MovookImg} width="60%" alt="movook" />
      </S.ImgContainer>
    </S.LoginContainer>
  );
};

export default Join;
