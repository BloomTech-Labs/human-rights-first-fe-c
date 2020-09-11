import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import * as data from '../../database/data2.json';
import usZips from 'us-zips';
import cities from '../../database/cities.json';
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
  const [selected, setSelected] = useState(null);
  const [multiIncidents, setMultiIncidents] = useState(null);

  const [zipCode, setZipCode] = useState('');
  const [cityName, setCityName] = useState({
    state: '',
    city: '',
    lat: '',
    lon: '',
  });
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
  const submitCityHandler = e => {
    e.preventDefault();
    console.log(cityName.state, cityName.city);
    const getCity = cities.filter(
      city => city.city === cityName.city && city.state_name === cityName.state
      //city => city.name === cityName.city && city.state === cityName.state
    );
    console.log(getCity[0].lat);
    setViewport({
      ...viewport,
      latitude: getCity[0].lat,
      longitude: getCity[0].lng,
      zoom: 10,
    });
  };

  const handleChange = e => {
    setZipCode(e.target.value);
  };
  const handleCityChange = e => {
    console.log(e.target.value);
    setCityName({ ...cityName, city: e.target.value });
  };
  const handleStateChange = e => {
    console.log(e.target.value);
    setCityName({ ...cityName, state: e.target.value });
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
      link: incident.Link1,
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

  return (
    <div>
      <div className="container">
        <div className="filter_bar">
          <form>
            <label>
              Search by zip code:
              <br />
              <input type="text" name="zipCode" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={submitHandler} />
            <br />
            <label>
              Search by city name:
              <br />
              <input type="hidden" name="country" id="countryId" value="US" />
              <select
                name="state"
                class="states order-alpha"
                id="stateId"
                onChange={handleStateChange}
              >
                <option value="state">Select State</option>
              </select>
              <select
                name="city"
                class="cities order-alpha"
                id="cityId"
                onChange={handleCityChange}
              >
                <option value="city">Select City</option>
              </select>
              <br />
              <input type="submit" value="Submit" onClick={submitCityHandler} />
            </label>
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
            const date = cluster.properties.date;
            const type = cluster.properties.type;
            const link = cluster.properties.link;

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

                      if (expansionZoom === 20) {
                        const filtered = data.data.filter(
                          i =>
                            parseFloat(i.LONGITUDE) ===
                            Math.round(
                              cluster.geometry.coordinates[0] * 1000000
                            ) /
                              1000000
                        );
                        setMultiIncidents(filtered);

                        filtered.map(i => {
                          setSelected([
                            i.LATITUDE,
                            i.LONGITUDE,
                            i.text,
                            i.tags_str,
                            i.date_text,
                            i.link1,
                          ]);
                        });
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
                date={date}
                type={type}
                link={link}
              >
                <div
                  onClick={e => {
                    e.preventDefault();
                    setSelected([latitude, longitude, text, type, date, link]);
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
              closeButton={false}
              className="popUpBox"
            >
              {/* TODO: make every incident to a box, allow users scroll down if there're multiple incidents*/}
              {multiIncidents ? (
                multiIncidents.map(incident => {
                  return (
                    <div
                      className="popup_incidents_container"
                      key={incident.id}
                    >
                      <a
                        className="incident_box"
                        href={incident.Link1}
                        target="_blank"
                      >
                        {/* type */}
                        <div className="type-incidents">
                          {incident.tags_str}
                        </div>
                        {/* description */}
                        <div className="text-incidents">{incident.text}</div>
                        {/* date */}
                        <div className="date-incidents">
                          {incident.date_text}
                        </div>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div className="popup_incidents_container">
                  <a
                    className="incident_box"
                    href={selected[5]}
                    target="_blank"
                  >
                    {/* type */}
                    <div className="type-incidents">{selected[3]}</div>
                    {/* description */}
                    <div className="text-incidents">{selected[2]}</div>
                    {/* date */}
                    <div className="date-incidents">{selected[4]}</div>
                  </a>
                  <button className="x" onClick={() => setSelected(null)}>
                    close
                  </button>
                </div>
              )}
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
