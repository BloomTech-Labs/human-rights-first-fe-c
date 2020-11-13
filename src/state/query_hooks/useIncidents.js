import axios from 'axios';
import { useQuery } from 'react-query';
export const useIncidents = () => {
  return useQuery(
    'incidents',
    () => {
      return axios
        .get(`https://hrf-c-api.herokuapp.com/incidents/showallincidents`)
        .then(res => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
