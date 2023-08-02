import React from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = (props) => {
  const { setIsAuth } = props;

  //ページ遷移用
  const navigate = useNavigate();

  const onClickGoogleLogout = () => {
    // ログアウト
    signOut(auth).then(() => {
      //ローカルストレージを空にする
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={onClickGoogleLogout}>ログアウト</button>
    </div>
  );
};

export default Logout;
