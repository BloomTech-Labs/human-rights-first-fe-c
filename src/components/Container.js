import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import MapView from '../components/map/MapView';
import NavMap from './NavMap';
import DashboardChart from './DashboardChart';
import ChartComponent from './ChartComponent';

export const Container = () => {
  return (
    <div>
      <NavMap />
      <div id="map"></div>

      <Switch>
        <Route path="/dashboard">
          <DashboardChart />
        </Route>
        <Route path="/chart">
          <ChartComponent />
        </Route>
        <Route path="/">
          <MapView />
        </Route>
      </Switch>
    </div>
  );
};
