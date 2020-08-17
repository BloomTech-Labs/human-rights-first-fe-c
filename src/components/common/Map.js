import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as incidentsData from '../../testing_data/incidents data.json';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 4,
    width: '100vw',
    height: '90vh',
  });
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div>filter bar</div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/janecyyu/ckdp4j03i0arg1imkwcu4kxzy"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {incidentsData.data.map(incident => (
          <Marker
            latitude={parseInt(incident.lat)}
            longitude={parseInt(incident.lon)}
          >
            <div
              onClick={e => {
                e.preventDefault();
                setSelected([incident.lat, incident.lon, incident.text]);
              }}
            >
              <img
                src="https://img.icons8.com/officel/16/000000/marker.png"
                alt="marker"
              />
            </div>
          </Marker>
        ))}
        {selected ? (
          <Popup
            latitude={parseInt(selected[0])}
            longitude={parseInt(selected[1])}
            onClose={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>{selected[2]}</p>
            </div>
          </Popup>
        ) : null}
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
