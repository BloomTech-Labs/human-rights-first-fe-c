import axios from 'axios';
import { useQuery } from 'react-query';

// ⬇️ --> USAGE: in react component <-- ⬇️
// const id = 18
// const incidentQuery = useIncident({id})

export const useIncident = ({ incident_id }) => {
  return useQuery(
    `incident/${incident_id}`,
    () => {
      return axios
        .get(
          `${process.env.REACT_APP_BACKENDURL}/incidents/incident/${incident_id}`
        )
        .then(res => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
