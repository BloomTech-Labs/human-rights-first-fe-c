import React from 'react';
import HRCpic from '../../assets/HRC(2).png';
import '../../styles/index.css';
import { Link as LinkTo } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const NavBar = () => {
  return (
    <div className="nav-div">
      <LinkTo to="/">
        <div className="HRClogo">
          <div className="logo-img-div">
            <img
              src={HRCpic}
              className="logo-img"
              alt="human-rights-considered-logo"
            />
            <h3>
              Human <br /> Rights <br /> Considered
            </h3>
          </div>
        </div>
      </LinkTo>
      <Breadcrumbs aria-label="breadcrumb" className="navigation">
        <Link
          href="https://c.humanrightsfirst.dev/#map"
          className="navigation-content"
          style={{ textDecoration: 'none', color: 'wheat' }}
        >
          View Map
        </Link>
        <Link
          href="https://c.humanrightsfirst.dev/#about"
          className="navigation-content"
          style={{ textDecoration: 'none', color: 'wheat' }}
        >
          About
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default NavBar;
