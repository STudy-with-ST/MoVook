import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Plan from "./pages/Plan";
import Review from "./pages/Review";
import Join from "./pages/Join";
const AppRouter = () => {
  // 사용자의 로그인 여부에 따른 라우터 처리
  return (
    <Router>
      {localStorage.getItem("accessToken") !== null ? (
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/intro" element={<Intro />} />
        </Routes>
      )}
    </Router>
  );
};

export default AppRouter;
