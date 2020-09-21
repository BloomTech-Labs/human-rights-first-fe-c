import React from 'react';
import HRCpic from '../../assets/HRC(2).png';
import '../../styles/index.css';
import { Link as LinkTo } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const NavBar = () => {
  return (
    <div className="nav-div">
      <LinkTo to="/">
        <div className="HRClogo">
          <div className="logo-img-div">
            <img src={HRCpic} className="logo-img" alt="logo-image" />
            <h3>
              Human <br /> Rights <br /> Considered
            </h3>
          </div>
        </div>
      </LinkTo>
      <Breadcrumbs aria-label="breadcrumb" className="navigation">
        <Link
          href="/"
          onClick={handleClick}
          className="navigation-content"
          style={{ textDecoration: 'none', color: '#8b3902' }}
        >
          View Map
        </Link>
        <Link
          href="http://localhost:3000/#about"
          className="navigation-content"
          style={{ textDecoration: 'none', color: '#8b3902' }}
        >
          About
        </Link>
      </Breadcrumbs>
    </div>
  );
};
export default NavBar;
