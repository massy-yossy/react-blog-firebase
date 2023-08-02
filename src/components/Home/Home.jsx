import React, { memo, useEffect, useState } from "react";

import "./Home.scss";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Home = memo(() => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(collection(db, "post"));
      // console.log(data);
      // console.log(data.docs)
      // console.log(data.docs.map((doc) => ({doc})));
      // console.log(data.docs.map((doc) => ({...doc.data()}))); //data関数のおかげで階層が少なくなるfirebase
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //スプレッド構文のおけげでidを追加で取得できる
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
    console.log(auth);
  }, []);

  const postDelete = async (id) => {
    await deleteDoc(doc(db, "post", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        const { title, postText, author, id } = post;
        return (
          <div key={id} className="postContents">
            <div className="postHeader">
              <h1>{title}</h1>
            </div>
            <div className="postTextContainer">{postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{author.username}</h3>
              {author.id === auth.currentUser?.uid && ( //現在のidとmap処理での各投稿のIDを確認 ?を入れることでnullでもOKにする
                <button onClick={() => postDelete(id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Home;
