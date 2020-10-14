import React from 'react';
import SignUp from './signup';
import SignUpPic from '../../../assets/signupImg.jpg';

const signupContainer = () => {
  return (
    <>
      <div className="signupContainer">
        <div className="sign-up-text-container">
          <h1 className="sign-up-h1">Sign Up</h1>
          <p className="sign-up-p">
            Gain access to your dashboard where you can see recent searches,
            customize your viewing experience and more!
          </p>
        </div>
        <div className="sign-up-form-and-image">
          <SignUp />
          <img
            src={SignUpPic}
            alt="Photo by Tiziano Pedrini from Pexels"
            className="sign-up-pic"
          />
        </div>
      </div>
    </>
  );
};

export default signupContainer;
