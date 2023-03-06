import React, { useState, useEffect } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import App from "./App";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth,db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore';

import { getDatabase, ref, set } from "firebase/database";
import Header from './Header';
import "firebase/auth";
import {  signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();
const Home = () => {


  const [userImageUrl, setUserImageUrl] = useState(null);
  const [userName, setuserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId,setUserId]=useState("");
 
  const onLoginSuccess = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUserImageUrl(data.user.photoURL);
      setuserName(data.user.displayName);
      setUserEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("image", data.user.photoURL);

    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserId(user.uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
    setuserName(localStorage.getItem("name"));
    setUserImageUrl(localStorage.getItem("image"));
   
  });


  const logOut=()=>{

    signOut(auth).then(() => {
      setUserEmail(localStorage.clear("email"));
      setuserName(localStorage.clear("name"));
      setUserImageUrl(localStorage.clear("image"));
    }).catch((error) => {
      collection.log("error");
    });
   
  }



  return (
    <>
      {userImageUrl && userEmail && userName ? (
        <>
        <Header profileURL={userImageUrl} profileName={userName} logOut={logOut}/>
        <App profileURL={userImageUrl} profileName={userName} userId={userId} />
        </>
      ) : (
        <div className="signIn-container">
          <div className="signIn-card">
            <img src="/assets/logo.png" className="signIn-card_img" alt="" />
            <h1 className="signIn-Name">noteWell</h1>
            <h6>Simplify note-taking with Notewell</h6>
            <hr className="signIn-hr" />

            <div className="Oauth" onClick={onLoginSuccess}>
              <FcGoogle size={40} color="#4285F4" />
              <p>SIGN IN USING GOOGLE</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
