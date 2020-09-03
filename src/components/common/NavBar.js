import React from 'react';
import HRCpic from '../../assets/HRC(2).png';
import '../../styles/index.css';

const NavBar = () => {
  return (
    <div className="nav-div">
      <nav className="nav-bar">
        <div className="HRClogo">
          <div className="logo-img-div">
            <img src={HRCpic} className="logo-img" />
            <h3>
              Human <br /> Rights <br /> Considered
            </h3>
          </div>
        </div>
        <div className="sign-up-btn">
          <a href="#">Sign Up</a>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
