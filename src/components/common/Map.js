import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as capitalsData from '../../testing_data/capitals.json';
import * as incidentsData from '../../testing_data/incidents data.json';
import PlotlyMap from './MapByPlotly';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 3,
    width: '70vw',
    height: '70vh',
  });
  const [selected, setSelected] = useState(null);

  return (
    <div>
      map viz by Mapbox -
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/janecyyu/ckdp4j03i0arg1imkwcu4kxzy"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {incidentsData.data.map(incident => (
          <Marker
            latitude={parseInt(incident.lat)}
            longitude={parseInt(incident.lon)}
          >
            <button
              onClick={e => {
                e.preventDefault();
                // setSelected([incident.lat, incident.lon, incident.text]);
                <Popup latitude={incident.lat} longitude={incident.lon}>
                  <div>{incident.text}</div>
                </Popup>;
              }}
            >
              📍
            </button>
          </Marker>
        ))}
        {/* {selected ? (
          <Popup latitude={selected[0]} longitude={selected[1]}>
            <div>{selected[2]}</div>
          </Popup>
        ) : null} */}
      </ReactMapGL>
    </div>
  );
};

export default Map;
{
  /* map viz by Plotly -
      <div id="myDiv">
        <PlotlyMap />
      </div> */
}
