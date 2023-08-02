import React, { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore"

import './createPost.scss';

import { auth, db } from "../../firebase";
import { useNavigate } from 'react-router-dom';

const CreatePost = (props) => {

  const { isAuth } = props

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [ postText, setPostText ] = useState("");

  const gettitle = (e) =>setTitle(e.target.value);
  const getPostText = (e) =>setPostText(e.target.value);

  useEffect(() => {
    if(!isAuth) navigate('/login');
  }, [])

  const createPost = async () => {
    await addDoc(collection(db, "post"), {
      title,
      postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    })
    navigate('/')
  }

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <p>タイトル</p>
          <input type="text" placeholder='タイトルを記入' onChange={gettitle} />
        </div>
        <div className='inputPost'>
          <p>投稿</p>
          <textarea placeholder='投稿内容を記入' onChange={getPostText}></textarea>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

export default CreatePost

