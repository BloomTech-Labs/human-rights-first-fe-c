import React, { useState } from 'react';
import PieChart from './PieChart';
import { PieData } from './PieData';
import { useIncidents } from '../state/query_hooks/useIncidents';

const DashboardChart = () => {
  const [limit] = useState(100);

  let pie_data = PieData(limit);
  const incidentsQuery = useIncidents();

  if (incidentsQuery?.data?.length > 0) {
    return (
      <div className="dash-chart-container">
        <PieChart data={pie_data} />
      </div>
    );
  }

  return <div className="dash-chart-container"></div>;
};
export default DashboardChart;
