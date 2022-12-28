import React, { useEffect, useState } from "react";
import AuthenticationCodeForm from "../../components/Password/AuthenticationCodeForm";
import PasswordInputForm from "../../components/Password/PasswordForm";

const FindPassword = () => {
  const [isVerified, setVerified] = useState(false);
  const [authCode, setAuthCode] = useState("");

  const handleSetAuthCode = (code) => {
    setAuthCode(code);
    setVerified(true);
  };

  useEffect(() => {
    console.log(`isVerified = ${isVerified}, authCode = ${authCode}`);
  }, [authCode, isVerified]);

  return authCode !== "" && isVerified ? (
    <AuthenticationCodeForm authCode={authCode} />
  ) : (
    <PasswordInputForm handleSetAuthCode={handleSetAuthCode} />
  );
};

export default FindPassword;
