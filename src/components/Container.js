import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React from 'react';
import MapFilter from './map/MapFilter';
import logo from '../assets/logo.png';

export const Container = () => {
  return (
    <div>
      <main>
        <div id="map">
          <MapFilter />
        </div>
      </main>
      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};
