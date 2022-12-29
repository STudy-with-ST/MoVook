import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Plan from "./pages/Plan";
import Review from "./pages/Review";
import Join from "./pages/Join";
import FindPassword from "./pages/FindPassword";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/review" element={<Review />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/password/find" element={<FindPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
