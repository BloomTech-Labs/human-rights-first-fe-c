import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import Map from './new-map/Map';
import NavMap from './NavMap';
import ChartComponent from './ChartComponent';

export const Container = () => {
  return (
    <div>
      <NavMap />
      <div id="map"></div>

      <Switch>
        <Route path="/chart">
          <ChartComponent />
        </Route>
        <Route path="/">
          <Map />
        </Route>
      </Switch>
    </div>
  );
};
