import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { PieData } from './PieData';
import { useIncidents } from '../state/query_hooks/useIncidents';
import NavMap from './NavMap';
const DashboardChart = () => {
  const [limit, setLimit] = useState(100);

  let pie_data = PieData(limit);
  const incidentsQuery = useIncidents();

  if (incidentsQuery?.data?.length > 0) {
    return (
      <div className="dash-chart-container">
        <NavMap />
        <PieChart data={pie_data} />
      </div>
    );
  }

  return (
    <div className="dash-chart-container">
      <NavMap />
    </div>
  );
};
export default DashboardChart;
