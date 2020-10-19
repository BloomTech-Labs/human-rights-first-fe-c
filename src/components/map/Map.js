import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, Layer, Feature } from 'react-map-gl';
import styled from 'styled-components';
import icon from '../../assets/pngegg.png';
import { MapDiv } from '../../styles/StyledComponents';

const Map = ({ filteredData }) => {
  const [viewport, setViewport] = useState({
    latitude: 38,
    longitude: -95,
    width: '80vw',
    height: '80vh',
    zoom: 3,
  });
  const [settings] = useState({
    scrollZoom: true,
  });

  const [selectedIncident, setSelectedIncident] = useState(null);
  const [descriptionClicked, setDescriptionClicked] = useState(false);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedIncident(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <MapDiv>
        <ReactMapGL
          {...viewport}
          {...settings}
          mapboxApiAccessToken={
            'pk.eyJ1IjoiamFzb25lbGxpb3RzIiwiYSI6ImNrZnloZjh2cjAybnYyc3AxOG1zZWVmMmoifQ.N-mmGAz8nf3VHwDOBk7sfw' ||
            process.env.REACT_APP_MAPBOX_TOKEN
          }
          mapStyle="mapbox://styles/jasonelliots/ckg9t6ll3002y19mk5th7j05v"
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
                    offsetLeft={-12}
                    offsetTop={-15}
                  >
                    <button
                      className="marker-btn"
                      onClick={e => {
                        e.preventDefault();
                        setSelectedIncident(incident);
                      }}
                    >
                      <img src={icon} alt="Incident Icon" className="icon" />
                    </button>
                  </Marker>
                ) : null
              )
            : null}

          {selectedIncident ? (
            <Popup
              latitude={selectedIncident.lat}
              longitude={selectedIncident.long}
              closeOnClick={false}
              onClose={() => {
                setSelectedIncident(null);
                setDescriptionClicked(false);
              }}
              className="popup"
            >
              <div>
                <h2>{selectedIncident.title}</h2>
                <p>
                  {selectedIncident.city}, {selectedIncident.state}
                </p>
                {descriptionClicked ? (
                  selectedIncident.desc
                ) : (
                  <button onClick={() => setDescriptionClicked(true)}>
                    {' '}
                    Show description{' '}
                  </button>
                )}
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </MapDiv>
    </>
  );
};

export default Map;
