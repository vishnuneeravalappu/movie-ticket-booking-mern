import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/components-login-signup/login-page-renderer";
import { SignupPage } from "../components/components-login-signup/signup-page-renderer";
import { Home } from "../components/components-home/home-base";

export const AppMainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
      </Routes>
    </Router>
  );
};
