import React from 'react';
import BarChart from './BarChart';
import { useBarChartData } from '../../utils/helpers/useBarChartData';
import { useIncidents } from '../../state/query_hooks/useIncidents';

function BarChartContainer() {
  // limit state could potentially be managed by a slider or other input
  // --> useBarChart() is set up to only return states with more incidents than the limit
  const [limit, setLimit] = React.useState(0);

  const incidentsQuery = useIncidents();
  const bar_data = useBarChartData(limit);

  if (incidentsQuery?.data?.length > 0) {
    return <BarChart data={bar_data} />;
  } else {
    return <div>"Loading Bar Chart Data"</div>;
  }
}

export default BarChartContainer;
