import React from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

// style component imports

import {
  StyledHeader,
  StyledTitle,
  StyledNavDiv,
} from '../styles/StyledComponents.js';

const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNavDiv>
        <a href="/">
          <img id="logo" src={logo} alt="human-rights-first-logo" />
        </a>
        <StyledTitle level={3}>Police Use of Force America</StyledTitle>
      </StyledNavDiv>
      <div className="navDiv">
        <NavLink className="link" to="/">
          Map
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/register">
          Sign-up
        </NavLink>
        <NavLink className="link" to="/login">
          Log-in
        </NavLink>
      </div>
    </StyledHeader>
  );
};
export default NavBar;
