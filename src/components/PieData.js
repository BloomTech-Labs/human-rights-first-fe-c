import { useIncidents } from '../state/query_hooks/useIncidents';
import { useCategoryCount } from '../helpers/useCategoryCount';

export const PieData = () => {
  const incidentsQuery = useIncidents();

  let raw_data = useCategoryCount(incidentsQuery.data);

  let raw_data_length = Object.keys(raw_data).length;
  let keys = Object.keys(raw_data);
  let values = Object.values(raw_data);

  let data_container = [];
  let data_obj = {};

  for (let i = 0; i < raw_data_length; i++) {
    data_obj[i] = { type_of_force: keys[i], count: values[i] };
  }

  data_container.push(data_obj);

  return data_container;
};
