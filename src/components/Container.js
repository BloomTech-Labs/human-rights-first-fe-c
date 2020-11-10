import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/logo.png';
import MapFilter from './map/MapFilter';
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
          <MapFilter />
        </Route>
      </Switch>
    </div>
  );
};
