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
          </div>
          <div className="logo-text-div">
            <h3>
              Human <br /> Rights <br /> Considered
            </h3>
          </div>
        </div>
        <a href="#">Sign Up</a>
      </nav>
    </div>
  );
};
export default NavBar;
