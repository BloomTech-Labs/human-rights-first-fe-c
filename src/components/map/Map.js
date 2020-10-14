import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import styled from 'styled-components';

const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Map = ({ filteredData }) => {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '80vw',
    height: '50vh',
    zoom: 3,
  });

  const [settings] = useState({
    scrollZoom: false,
  });

  return (
    <>
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
          {filteredData
            ? filteredData.map(incident =>
                incident.lat ? (
                  <Marker
                    key={incident.id}
                    latitude={incident.lat}
                    longitude={incident.long}
                  >
                    <button>{incident.city}</button>
                  </Marker>
                ) : null
              )
            : null}
        </ReactMapGL>
      </Styleddiv>
    </>
  );
};

export default Map;
