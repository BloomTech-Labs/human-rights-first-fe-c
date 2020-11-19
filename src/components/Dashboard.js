import React from 'react';

import DashboardChart from './DashboardChart';
import NavMap from './NavMap';

const Dashboard = () => {
  return (
    <div
      className="dashboard-container"
      style={{ height: '100vh', width: '100%' }}
    >
      <div className="dashbaord-nav">
        <NavMap />
        <DashboardChart />
      </div>
    </div>
  );
};

export default Dashboard;
