import React from "react";
import { useInput } from "../../hooks/useInput";
import BasicButton from "../common/BasicButton";
import BasicInput from "../common/BasicInput";

const AuthenticationCodeForm = ({ authCode }) => {
  const [authenticationCode, onChangeAuthenticationCode] = useInput("");
  const handleConfirmAuthCode = () => {
    if (authCode === authenticationCode) {
      console.log("인증성공 -> 비밀번호 변경 페이지로 이동 ");
    } else {
      console.log("인증 실패");
    }
  };
  return (
    <div>
      <h1>인증 코드를 입력해주세요!</h1>
      <BasicInput
        type="text"
        placeholder="인증 코드"
        value={authenticationCode}
        onChange={onChangeAuthenticationCode}
      />
      <BasicButton text="인증 확인" onClick={handleConfirmAuthCode} />
    </div>
  );
};

export default AuthenticationCodeForm;
