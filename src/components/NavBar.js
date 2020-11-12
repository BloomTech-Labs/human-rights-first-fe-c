import React from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';
import logo from '../assets/logo.png';
import { Menu } from 'antd';
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
        <a href="https://www.humanrightsfirst.org/">
          <img id="logo" src={logo} alt="human-rights-first-logo" />
        </a>
        <StyledTitle level={3}>Police Brutality Across America</StyledTitle>
      </StyledNavDiv>
      <div className="navDiv">
        <NavLink className="link" to="/dashboard">
          Dashboard
        </NavLink>
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
