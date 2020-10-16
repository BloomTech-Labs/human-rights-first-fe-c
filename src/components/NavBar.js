import React, { useState } from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';
import logo from '../assets/logo.png';
import { Menu, Typography } from 'antd';

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
          <a href="#map"> Map </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#about"> About </a>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};
export default NavBar;
