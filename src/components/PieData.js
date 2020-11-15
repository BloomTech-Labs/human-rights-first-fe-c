import { useIncidents } from '../state/query_hooks/useIncidents';
import { useIncident } from '../state/query_hooks/useIncident';
import { useCategoryCount } from '../helpers/useCategoryCount';

export const PieData = () => {
  const incidentsQuery = useIncidents();

  let data = useCategoryCount(incidentsQuery.data);

  return data;
};
