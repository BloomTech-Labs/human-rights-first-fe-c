export const useStateCount = incidents => {
  let incident_count = {};
  if (incidents) {
    incidents.forEach(incident => {
      if (!incident_count[incident.state]) {
        incident_count[incident.state] = 1;
      } else {
        incident_count[incident.state] += 1;
      }
    });
  }
  return incident_count;
};
