import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import * as incidentsData from '../../testing_data/incidents data.json';
import * as data from '../../testing_data/data2.json';
import usZips from 'us-zips';
import useSupercluster from 'use-supercluster';
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
    // TODO: update types, see: https://ppt.cc/fpdyfx
    // TODO: update icons
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

  const points = data.data.map(incident => ({
    type: 'Feature',
    properties: {
      cluster: false,
      text: incident.text,
      id: incident.id,
      type: incident.tags_str,
      date: incident.date_text,
    },
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(incident.LONGITUDE),
        parseFloat(incident.LATITUDE),
      ],
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
      <div className="container">
        {/* filter bar starts here */}
        <div className="filter_bar">
          {/* search by zip code */}
          <form>
            <label>
              Search by zip code:
              <br />
              <input type="text" name="zipCode" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={submitHandler} />
          </form>
          {/* TODO: search by city  */}
          {/* TODO: search by types of force  */}
        </div>
        {/* filter bar ends here*/}

        {/* Map starts here */}
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
            const date = cluster.properties.date;
            const type = cluster.properties.type;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            // multiple incidents
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

                      if (expansionZoom === 20) {
                        const description = [];
                        const filtered = incidentsData.data.filter(
                          i =>
                            parseFloat(i.lon) ===
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

            // single incidents:
            return (
              <Marker
                key={cluster.properties.id}
                latitude={latitude}
                longitude={longitude}
                date={date}
                type={type}
              >
                <div
                  onClick={e => {
                    e.preventDefault();
                    setSelected([latitude, longitude, text, type, date]);
                  }}
                >
                  {typeOfIncidents(text)}
                </div>
              </Marker>
            );
          })}

          {/* pop up box starts here */}
          {selected ? (
            <Popup
              latitude={parseFloat(selected[0])}
              longitude={parseFloat(selected[1])}
              onClose={() => {
                setSelected(null);
              }}
              className="popUpBox"
            >
              {/* TODO: make every incident to a box, allow users scroll down if there're multiple incidents*/}
              <div>
                <a className="incident_box">
                  {/* type */}
                  <div className="type-incidents">{selected[3]}</div>
                  {/* description */}
                  <div className="text-incidents">{selected[2]}</div>
                  {/* date */}
                  <div className="date-incidents">{selected[4]}</div>
                </a>
              </div>
            </Popup>
          ) : null}
          {/* pop up box ends here */}
        </ReactMapGL>
        {/* Map ens here */}
      </div>
    </div>
  );
};

export default Map;
