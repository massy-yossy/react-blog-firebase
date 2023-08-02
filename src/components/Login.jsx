import React from "react";
import { useNavigate } from "react-router-dom";


import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = (props) => {
  const { setIsAuth } = props;

  //ページ遷移用
  const navigate = useNavigate();

  const onClickGoogleLogin = () => {
    //googleでのログイン
    signInWithPopup(auth, provider).then((result) => {
      //ローカルストレージに保存
      localStorage.setItem("isAuth", true);
      //状態をtrue
      setIsAuth(true);
      //ログインしたらホームに戻る
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={onClickGoogleLogin}>Googleでログイン</button>
    </div>
  );
};

export default Login;
