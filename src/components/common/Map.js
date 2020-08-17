import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as incidentsData from '../../testing_data/incidents data.json';
import '../../styles/index.css';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 4,
    width: '100vw',
    height: '90vh',
  });
  const [selected, setSelected] = useState(null);

  const typeOfIncidents = data => {
    if (data.includes('tear')) {
      return (
        <img
          src="https://img.icons8.com/cotton/30/000000/eye-disease.png"
          alt="tear-gas icon"
        />
      );
    } else if (data.includes('shoot')) {
      return (
        <img
          src="https://img.icons8.com/dusk/30/000000/gun.png"
          alt="shoot icon"
        />
      );
    } else if (data.includes('pepper')) {
      return (
        <img
          src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
          alt="pepper spray icon"
        />
      );
    } else {
      return (
        <img
          src="https://img.icons8.com/color/30/000000/angry-fist.png"
          alt="violence icon"
        />
      );
    }
  };

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
              {typeOfIncidents(incident.text)}
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
            className="popUpBox"
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
