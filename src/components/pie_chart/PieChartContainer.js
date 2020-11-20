import React, { useState } from 'react';
import PieChart from './PieChart';
import { usePieChartData } from '../../utils/helpers/usePieChartData';
import { useIncidents } from '../../state/query_hooks/useIncidents';

function PieChartContainer() {
  // limit state could potentially be managed by a slider or other input
  // --> useBarChart() is set up to only return tags with more incidents than the limit
  // --> we chose 100 for now to not clutter the pie chart
  const [limit] = useState(100);

  const incidentsQuery = useIncidents();
  const pie_data = usePieChartData(limit);

  if (incidentsQuery?.data?.length > 0) {
    return <PieChart data={pie_data} />;
  } else {
    return <div>"Loading Pie Chart Data"</div>;
  }
}
export default PieChartContainer;
