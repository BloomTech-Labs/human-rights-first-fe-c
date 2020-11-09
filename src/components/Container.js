import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from '../assets/logo.png';
import MapFilter from './map/MapFilter';

export const Container = () => {
  return (
    <div>
      <main>
        <div id="map">
          <MapFilter />
        </div>
      </main>
      <footer className="page-footer">
        <small>
          © Copyright {new Date().getFullYear()}, Human Rights First. All rights
          reserved.
        </small>
        <ul></ul>
      </footer>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
};
