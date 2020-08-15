import React from 'react';
import HRCpic from '../../styles/assets/HRC.png';

const NavBar = () => {
  return (
    <div>
      <nav>
        <img src={HRCpic} width="10%" alt="Human Rights Considered Logo" />
        <a href="#">Sign Up</a>
      </nav>
    </div>
  );
};
export default NavBar;
