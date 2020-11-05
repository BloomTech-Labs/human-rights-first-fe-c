import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    const getIncidents = () => {
      axios
        .get('https://hrf-c-api.herokuapp.com/')
        .then(res => {
          setIncidents(res.data);
        })
        .catch(err => {
          console.error('server error', err);
        });
    };

    getIncidents();
  }, []);

  return (
    <div className="incident-list">
      {incidents.map(incident => console.log(incident))}
    </div>
  );
};

export default Dashboard;
