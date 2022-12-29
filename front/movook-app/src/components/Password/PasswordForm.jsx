import React from "react";
import { userApi } from "../../api";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
const PasswordInputForm = ({ handleSetAuthCode }) => {
  const [userId, onChangeUserId] = useInput("");
  const [userEmail, onChangeUserEmail] = useInput("");

  const handleFindPassword = (e) => {
    e.preventDefault();
    if (!userId || !userEmail) {
      alert("아이디와 이메일을 입력해주세요!");
      return;
    }

    const user = {
      user_id: userId,
      email: userEmail,
    };

    console.log("user", user);

    userApi
      .findPassword(user)
      .then(({ data }) => {
        handleSetAuthCode(data);
        alert(`${userEmail}로 인증 코드가 발송되었습니다:) `);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>비밀번호를 잃어버리셨나요? </h1>
      <form method="POST">
        <BasicInput
          type="text"
          placeholder="가입한 아이디를 입력해주세요!"
          value={userId}
          onChange={onChangeUserId}
        />
        <BasicInput
          type="text"
          placeholder="가입시 사용한 이메일을 입력해주세요!"
          value={userEmail}
          onChange={onChangeUserEmail}
        />
        <BasicButton onClick={handleFindPassword} text="비밀번호 재설정" />
      </form>
    </div>
  );
};
export default PasswordInputForm;
