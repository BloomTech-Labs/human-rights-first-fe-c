import React from 'react';
import { ChartContents } from '../styles/StyledComponents';
import BarChart from './BarChart';
import { BarData } from './BarData';
import { useIncidents } from '../state/query_hooks/useIncidents';
export default function ChartComponent() {
  const [limit, setLimit] = React.useState(0);
  let bar_data = BarData(limit);
  const incidentsQuery = useIncidents();
  if (incidentsQuery?.data?.length > 0) {
    return (
      <ChartContents>
        <BarChart data={bar_data} />
      </ChartContents>
    );
  }
  return <div className="dash-chart-container"></div>;
}
