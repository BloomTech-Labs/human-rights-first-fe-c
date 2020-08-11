import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import * as capitalsData from '../../testing_data/capitals.json';
import PlotlyMap from './MapByPlotly';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 2.5,
    width: '70vw',
    height: '70vh',
  });
  return (
    <div>
      map viz by Mapbox -
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/janecyyu/ckdp4j03i0arg1imkwcu4kxzy"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {capitalsData.states.map(c => (
          <Marker latitude={parseInt(c.lat)} longitude={parseInt(c.long)}>
            <div>📍</div>
          </Marker>
        ))}
      </ReactMapGL>
      <div id="myDiv">
        <PlotlyMap />
      </div>
    </div>
  );
};

export default Map;
