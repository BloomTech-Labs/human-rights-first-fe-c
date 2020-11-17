import React from 'react';

import DashboardChart from './DashboardChart';
import NavMap from './NavMap';

import { useIncidents } from '../state/query_hooks/useIncidents';

const Dashboard = () => {
  const incidentsQuery = useIncidents();

  return (
    <div
      className="dashboard-container"
      style={{ height: '60vh', width: '100%' }}
    >
      <div className="dashbaord-nav">
        <NavMap />
        <DashboardChart />
      </div>
    </div>
  );
};

export default Dashboard;
