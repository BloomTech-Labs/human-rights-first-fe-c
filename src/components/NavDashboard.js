import React from 'react';
import { Link } from 'react-router-dom';

const NavDashboard = () => {
  return (
    <div className="dashboard-nav">
      <Link to="/dashboard-chart">Explore</Link>
    </div>
  );
};

export default NavDashboard;
