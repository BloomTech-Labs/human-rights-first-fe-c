import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Route, Switch, useParams } from 'react-router-dom';
import IncidentCard from './IncidentCard';
import DashboardChart from './DashboardChart';
import NavDashBoard from './NavDashboard';

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const getIncidents = () => {
      axios
        .get('https://hrf-c-api.herokuapp.com/incidents/showallincidents', {})
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
    <div className="dashboard-container">
      <div className="dashbaord-nav">
        <NavDashBoard />

        <Switch>
          <Route path="/dashboard-chart">
            <DashboardChart />
          </Route>
        </Switch>
      </div>

      <div className="incident-list">
        {incidents.map(incident => (
          <IncidentDetails key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

function IncidentDetails({ incident }) {
  return (
    <div className="incident-card">
      <IncidentCard incident={incident} />
    </div>
  );
}
export default Dashboard;
