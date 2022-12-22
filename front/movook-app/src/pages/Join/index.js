import React, { useEffect, useState } from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
const Join = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const [userBirth, onChangeUserBirth] = useInput("");
  const [userConfirmPw, onChangeUserConfirmPw] = useInput("");
  const [isValidate, setValidate] = useState(false);

  useEffect(() => {
    if (isValidate) {
      setValidate(false);
    }
  }, [isValidate, onChangeUserConfirmPw, onChangeUserPw]);

  const validatePassword = () => {
    if (userConfirmPw === userPw) {
      console.log("일치");
      setValidate(true);
    } else {
      console.log("불일치");
      setValidate(false);
    }
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    validatePassword();
    if (isValidate) {
      const createdUser = {
        id: userId,
        name: userBirth,
        password: userPw,
      };
      console.log("createdUser: ", createdUser);
    }
  };
  return (
    <S.LoginContainer>
      <S.LoginFormContainer>
        <S.PageTitle>회원가입</S.PageTitle>
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
              id="input-birth"
              text="Birth"
              type="date"
              value={userBirth}
              onChange={onChangeUserBirth}
            />
            <BasicInput
              text="Password"
              placeholder="Enter Your Password"
              type="password"
              value={userPw}
              onChange={onChangeUserPw}
            />
            <BasicInput
              text="Confirm Password"
              placeholder="Enter Your Confirm Password"
              type="password"
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
