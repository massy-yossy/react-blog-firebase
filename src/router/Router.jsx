import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Navbar from "../components/nav/Navbar";
import CreatePost from "../components/createPost/CreatePost";
import Home from "../components/Home/Home";

const Router = () => {
  // ログインしているか確認用の状態変数
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem('isAuth'))

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
