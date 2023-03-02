import React, { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import App from "./App";
import { FcGoogle } from "react-icons/fc";
const Home = () => {
  const [showMain, setShowMain] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [userImageUrl, setUserImageUrl] = useState(null);
  
  const onLoginSuccess = ({provider,data}) => {
    setShowSignIn(false);
    setShowMain(true);
    setUserImageUrl(data.picture);
   
    console.log("login success",provider,data);

  };
  const onFailureSuccess = (response) => {
    setShowSignIn(true);
    setShowMain(false);
    console.log("login failure", response);
  };

  return (
    <>

      {showSignIn ? 
        <div className="signIn-container">
          <div className="signIn-card">
            <img src="/assets/logo.png" className="signIn-card_img" alt="" />
            <h1 className="signIn-Name">noteWell</h1>
            <h6>Simplify note-taking with Notewell</h6>
            <hr className="signIn-hr" />

            <LoginSocialGoogle
              className="Oauth"
              client_id={
                process.env.REACT_APP_GG_APP_ID ||
                "394539505461-m753i156gsac99jfo3f1i1elkv64hpi7.apps.googleusercontent.com"
              }
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={onLoginSuccess}
              onReject={onFailureSuccess}
            >
              <FcGoogle size={40} color="#4285F4" />
              <p>SIGN IN USING GOOGLE</p>
            </LoginSocialGoogle>
          </div>
        </div>
       : null}
      {showMain?(<App profileURL={userImageUrl}/>):null}
    </>
  );
};

export default Home;
