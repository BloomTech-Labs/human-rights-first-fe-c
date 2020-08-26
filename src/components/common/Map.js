import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import * as incidentsData from '../../testing_data/incidents data.json';
import usZips from 'us-zips';
import useSupercluster from 'use-supercluster';
import SideBar from './SideBar';
import NavBar from '../common/NavBar';
import '../../styles/index.css';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 4,
    width: '100vw',
    height: '73vh',
  });
  const [isShown, setIsShown] = useState(false);
  const [selected, setSelected] = useState(null);

  const [zipCode, setZipCode] = useState('');

  const mapRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    setViewport({
      latitude: usZips[zipCode].latitude,
      longitude: usZips[zipCode].longitude,
      zoom: 10,
      width: '100vw',
      height: '73vh',
    });
  };

  const handleChange = e => {
    e.preventDefault();
    setZipCode(e.target.value);
  };

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelected(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const typeOfIncidents = data => {
    if (data.includes('tear')) {
      return (
        <div className="incidents_icons">
          <img
            src="https://img.icons8.com/ios-glyphs/25/000000/eye-disease.png"
            alt="tear-gas icon"
          />
        </div>
      );
    } else if (data.includes('shoot')) {
      return (
        <div className="incidents_icons">
          <img
            src="https://img.icons8.com/color/25/000000/flash-bang.png"
            alt="shoot icon"
          />
        </div>
      );
    } else if (data.includes('pepper')) {
      return (
        <div className="incidents_icons">
          <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          />
        </div>
      );
    } else {
      return (
        <div className="incidents_icons">
          <img
            className="else"
            src="https://img.icons8.com/ios-filled/30/000000/action.png"
            alt="violence icon"
          />
        </div>
      );
    }
  };

  const points = incidentsData.data.map(incident => ({
    type: 'Feature',
    properties: { cluster: false, text: incident.text, id: incident.id },
    geometry: {
      type: 'Point',
      coordinates: [parseFloat(incident.lon), parseFloat(incident.lat)],
    },
  }));

  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="filter_bar">
          <form>
            <label>
              Search for a place by zip code:
              <br />
              <input type="text" name="zipCode" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={submitHandler} />
          </form>
        </div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/janecyyu/ckeafpzbv05jh19qdfpxnfmzh"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
          ref={mapRef}
        >
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const text = cluster.properties.text;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                >
                  <div
                    className="cluster-marker"
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );

                      setViewport({
                        ...viewport,
                        latitude,
                        longitude,
                        zoom: expansionZoom,
                        transitionInterpolator: new FlyToInterpolator({
                          speed: 2,
                        }),
                        transitionDuration: 'auto',
                      });

                      if (expansionZoom == 20) {
                        const description = [];
                        const filtered = incidentsData.data.filter(
                          i =>
                            parseFloat(i.lon) ==
                            Math.round(
                              cluster.geometry.coordinates[0] * 1000000
                            ) /
                              1000000
                        );
                        filtered.map(i => description.push(i.text));
                        setSelected([latitude, longitude, description]);
                      }
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={cluster.properties.id}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  onMouseEnter={() => {
                    setIsShown(true);
                    setSelected([latitude, longitude, text]);
                  }}
                  onMouseLeave={() => {
                    setIsShown(false);
                    setSelected(null);
                  }}
                >
                  {typeOfIncidents(text)}
                </div>
              </Marker>
            );
          })}
          {selected ? (
            <Popup
              latitude={parseFloat(selected[0])}
              longitude={parseFloat(selected[1])}
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
    </div>
  );
};

export default Map;
