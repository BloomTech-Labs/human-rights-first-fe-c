import React, { useState } from 'react';
import './../styles/index.css';
import 'antd/dist/antd.css';
import { Link as LinkTo } from 'react-router-dom';

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
        position: 'fixed',
        width: '100vw',
        padding: '3% 15%',
        zIndex: 100,
        borderBottom: '5px solid black',
      }}
    >
      <div className="logo">
        <span> Test </span>
      </div>
      <Menu mode="horizontal">
        <Menu.Item>
          <span> Map </span>
        </Menu.Item>
        <Menu.Item>
          <span> About </span>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default NavBar;
