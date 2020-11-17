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
        {/* ⬇️ pushes legend below footer -- needs a solution [@ nic] */}
        {/* <h1 style={{ textAlign: 'center' }}> Most Common Incident Types</h1> */}
        <PieChart data={pie_data} />
      </div>
    );
  }

  return <div className="dash-chart-container"></div>;
};
export default DashboardChart;
