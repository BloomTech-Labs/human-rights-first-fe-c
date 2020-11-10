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

      <Menu mode="horizontal">
        <Menu.Item>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">Map</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/register">Sign-up</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/login">Log-in</NavLink>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};
export default NavBar;
