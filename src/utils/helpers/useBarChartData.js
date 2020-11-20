import { useIncidents } from '../../state/query_hooks/useIncidents';
import { getStateCount } from './getStateCount';

export const useBarChartData = limit => {
  const incidentsQuery = useIncidents();
  let data_container = [];
  let raw_data = getStateCount(incidentsQuery.data);
  let raw_data_length = Object.keys(raw_data).length;
  let keys = Object.keys(raw_data);
  let values = Object.values(raw_data);
  let data_obj = {};
  for (let i = 0; i < raw_data_length; i++) {
    if (values[i] > limit) {
      data_obj = { state: keys[i], count: values[i] };
      data_container.push(data_obj);
    }
  }
  data_container.sort((a, b) => a.state.localeCompare(b.state));

  return data_container;
};
