import React, { useState } from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        height: '21vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        top: 0,
        // position: 'fixed',
        width: '100vw',
        marginBottom: '-2.5%',
        padding: '0% 15%',
        zIndex: 100,
        opacity: '80%',
        borderBottom: '5px solid black',
      }}
    >
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
    </Header>
  );
};
export default NavBar;
