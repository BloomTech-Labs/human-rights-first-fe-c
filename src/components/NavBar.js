import React, { useState } from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';

// style component imports
import { StyledHeader } from '../styles/StyledComponents.js';

const NavBar = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img
          id="logo"
          src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/423165_10150686770200747_669805325_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=-TaZmzOKohgAX8W3jk4&_nc_ht=scontent-sjc3-1.xx&oh=88b11d2fdc32243402fed9c37667b936&oe=5F8F34C8"
          alt="human-rights-first-logo"
        />
      </div>
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
