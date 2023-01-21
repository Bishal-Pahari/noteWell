import React from "react";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <div className="signIn-container">
        <div className="signIn-card">
          <img src="/assets/logo.png" className="signIn-card_img" alt="" />
          <h1 className="signIn-Name">noteWell</h1>
          <hr className="signIn-hr" />
          <div className="Oauth">
            <FcGoogle size={40} color="#4285F4" />
            <p>SIGN IN USING GOOGLE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
