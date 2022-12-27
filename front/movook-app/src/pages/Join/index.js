import React, { useEffect, useState } from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
import MovookImg from "../../assets/img/common/img_movook.png";
import * as S from "./style.js";
import { userApi } from "../../api";

// User 객체
// user_id;
// password;
// email;
// birthday;

const Join = () => {
  const [userId, onChangeUserId] = useInput("");
  const [userPw, onChangeUserPw] = useInput("");
  const [userEmail, onChangeUserEmail] = useInput("");
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

  const handleOnClick = async (e) => {
    e.preventDefault();
    validatePassword();

    const createdUser = {
      user_id: userId,
      email: userEmail,
      birthday: userBirth,
      password: userPw,
    };

    await userApi
      .join(createdUser)
      .then(({ data }) => console.log("성공: ", data))
      .catch((error) => console.log("실패: ", error));
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
              placeholder="ID"
              type="text"
              value={userId}
              onChange={onChangeUserId}
            />
            <BasicInput
              id="input-email"
              text="Email"
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={onChangeUserEmail}
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
              placeholder="Password"
              type="password"
              value={userPw}
              onChange={onChangeUserPw}
            />
            <BasicInput
              text="Confirm Password"
              placeholder="Confirm Password"
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
