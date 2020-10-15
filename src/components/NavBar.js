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
        height: '20vh',
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
        <span> Test </span>
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
