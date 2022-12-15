import React from "react";
import BasicButton from "../../components/common/BasicButton";
import BasicInput from "../../components/common/BasicInput";
import { useInput } from "../../hooks/useInput";
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
    <div>
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
    </div>
  );
};

export default Login;
