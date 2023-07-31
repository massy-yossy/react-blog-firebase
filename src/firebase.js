import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//認証用
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//データベース用
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI8TIAb4QxQuYU718LdoAzwvFl9WFqRUA",
  authDomain: "react-blog-a9db2.firebaseapp.com",
  projectId: "react-blog-a9db2",
  storageBucket: "react-blog-a9db2.appspot.com",
  messagingSenderId: "760901144961",
  appId: "1:760901144961:web:eb18ed9219c7f687f65880",
  measurementId: "G-J25E59GFVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//認証
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//データベース
const db = getFirestore(app);
//どこでも使えるように
export { auth, provider, db };
