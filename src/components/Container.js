import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React from 'react';
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
    </div>
  );
};
