import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { useIncidents } from '../state/query_hooks/useIncidents';
import { useIncident } from '../state/query_hooks/useIncident';
import { useCategoryCount } from '../helpers/useCategoryCount';

const DashboardChart = () => {
  const incidentsQuery = useIncidents();
  const incident_id = 'mn-minneapolis-21';
  const incidentQuery = useIncident({ incident_id });

  console.log(useCategoryCount(incidentsQuery.data));

  return (
    <div className="dash-chart-container">
      <PieChart />
    </div>
  );
};
export default DashboardChart;
