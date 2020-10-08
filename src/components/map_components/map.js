import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import * as data from '../../database/data1.json';
import styled from 'styled-components';

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '80vw',
    height: '50vh',
    zoom: 3,
  });

  const [settings, setSettings] = useState({
    scrollZoom: false,
  });

  return (
    <>
      {/* <div>
        {data.data
          ? data.data.map(data => (
              <div>
                <p>
                </p>
              </div>
            ))
          : null}
      </div> */}
      <Styleddiv>
        <ReactMapGL
          {...viewport}
          {...settings}
          mapboxApiAccessToken={
            'pk.eyJ1IjoiamFzb25lbGxpb3RzIiwiYSI6ImNrZnloZjh2cjAybnYyc3AxOG1zZWVmMmoifQ.N-mmGAz8nf3VHwDOBk7sfw' ||
            process.env.REACT_APP_MAPBOX_TOKEN
          }
          mapStyle="mapbox://styles/jasonelliots/ckfyi3f840a3719nv8ruodjrn"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {data.data.map(incident => (
            <Marker
              key={incident.id}
              latitude={incident.LATITUDE}
              longitude={incident.LONGITUDE}
            >
              <button backgroundColor={'black'}></button>
            </Marker>
          ))}
        </ReactMapGL>
      </Styleddiv>
    </>
  );
};

export default Map;
