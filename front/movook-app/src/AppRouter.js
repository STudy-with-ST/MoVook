import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Plan from "./pages/Plan";
import Review from "./pages/Review";
import Join from "./pages/Join";
const AppRouter = () => {
  // 로그인 여부에 따라 나누기
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
