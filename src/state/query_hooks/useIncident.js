import axios from 'axios';
import { useQuery } from 'react-query';

// ⬇️ --> USAGE: in react component <-- ⬇️
// const id = 18
// const incidentQuery = useIncident({id})

export const useIncident = ({ id }) => {
  return useQuery(
    `incident/${id}`,
    () => {
      return axios
        .get(`https://hrf-c-api.herokuapp.com/incidents/incident/${id}`)
        .then(res => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
