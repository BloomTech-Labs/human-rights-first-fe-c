export const getStateCount = incidents => {
  let incident_count = {};
  if (incidents) {
    incidents.forEach(incident => {
      if (incident.state !== 'Unknown Location') {
        if (!incident_count[incident.state]) {
          incident_count[incident.state] = 1;
        } else {
          incident_count[incident.state] += 1;
        }
      }
    });
  }
  return incident_count;
};
