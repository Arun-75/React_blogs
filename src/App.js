import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/header/Header";
// import Login from "./components/signup.component";
import Login from "./page/login/Login";
import Signup from "./page/Signup/Signup";
import Home from "./page/Home/Home.js";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
