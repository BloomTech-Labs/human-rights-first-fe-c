import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import * as data from '../../database/data2.json';
import usZips from 'us-zips';
import states from '../../database/states.json';
import useSupercluster from 'use-supercluster';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/index.css';

const splitSameLocation = data => {
  Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  var lng_lat_storage = {};

  data.default.data.map(i => {
    if (!lng_lat_storage.hasOwnProperty(i.LATITUDE)) {
      lng_lat_storage[i.LATITUDE] = i.LONGITUDE;
    } else {
      i.LATITUDE += Math.random() / 1000;
      i.LONGITUDE += Math.random() / 1000;
    }
  });
};

const stylesForCityFilter = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStylesForZipCodeFilter = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

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
  const [state, setState] = React.useState({
    Presence: true,
    Soft: true,
    Hard: true,
    Projectiles: true,
    Chemical: true,
    EnergyDevices: true,
    Miscellaneous: true,
    Other: true,
  });
  const mapRef = useRef();
  const classesForStateFilter = stylesForCityFilter();
  const classesForZipCodeFilter = useStylesForZipCodeFilter();

  const submitHandler = e => {
    e.preventDefault();
    setViewport({
      latitude: usZips[zipCode].latitude,
      longitude: usZips[zipCode].longitude,
      zoom: 10,
      width: '100vw',
      height: '73vh',
    });
    setZipCode('');
  };
  const submitStateHandler = e => {
    if (!e.target.value) {
      setViewport({
        latitude: 37.09024,
        longitude: -95.712891,
        zoom: 4,
        width: '100vw',
        height: '73vh',
      });
      return;
    }
    const getCity = states.filter(s => s.state === e.target.value);
    setViewport({
      ...viewport,
      latitude: getCity[0].latitude,
      longitude: getCity[0].longitude,
      zoom: 6,
    });
  };
  const handleChange = e => {
    setZipCode(e.target.value);
  };

  const handleTypeChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [filteredData, setFilterData] = useState(null);

  function getFirstType(types) {
    let firstType = '';
    for (let i = 0; i < types.length; i++) {
      if (types[i] == ',') {
        break;
      }
      firstType += types[i];
    }
    return firstType;
  }

  useEffect(() => {
    const falseBtn = [];
    Object.entries(state).map(check => {
      if (!check[1]) {
        falseBtn.push(check);
      }
    });
    if (falseBtn.length > 0) {
      const getBtn = [];
      falseBtn.map(btn => getBtn.push(btn[0]));
      setFilterData(
        data.default.data.filter(
          i =>
            !getBtn.includes(
              i.tags_str.includes(',') ? getFirstType(i.tags_str) : i.tags_str
            )
        )
      );
    } else {
      setFilterData(data.default.data);
    }
  }, [state]);

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
    if (data.includes('Presence')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/ios-glyphs/25/000000/eye-disease.png"
            alt="tear-gas icon"
          /> */}{' '}
          😗
        </div>
      );
    } else if (data.includes('Soft')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/color/25/000000/flash-bang.png"
            alt="shoot icon"
          /> */}{' '}
          🐖
        </div>
      );
    } else if (data.includes('Hard')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          /> */}{' '}
          🍋
        </div>
      );
    } else if (data.includes('Projectiles')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          /> */}{' '}
          🍎
        </div>
      );
    } else if (data.includes('Chemical')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          /> */}
          🏓
        </div>
      );
    } else if (data.includes('EnergyDevices')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          /> */}
          🥝
        </div>
      );
    } else if (data.includes('Miscellaneous')) {
      return (
        <div className="incidents_icons">
          {/* <img
            src="https://img.icons8.com/plasticine/30/000000/deodorant-spray.png"
            alt="pepper spray icon"
          /> */}{' '}
          🐻
        </div>
      );
    } else {
      return (
        <div className="incidents_icons">
          {/* <img
            className="else"
            src="https://img.icons8.com/ios-filled/30/000000/action.png"
            alt="violence icon"
          /> */}{' '}
          ⚓
        </div>
      );
    }
  };

  const points = filteredData
    ? filteredData.map(incident => ({
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
      }))
    : data.data.map(incident => ({
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
  splitSameLocation(data);
  return (
    <div>
      <div className="container">
        <div className="filter_bar">
          <form>
            <label>
              Search by state:
              <br />
              <FormControl
                variant="outlined"
                className={classesForStateFilter.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  name="state"
                  onChange={submitStateHandler}
                  label="State"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {states.map(c => (
                    <MenuItem value={c.state}>{c.state}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
            </label>
            <label>
              Search by zip code:
              <form
                noValidate
                autoComplete="off"
                className={classesForZipCodeFilter.root}
              >
                <TextField
                  id="filled-basic"
                  label="Zip Code Here"
                  name="zipCode"
                  value={zipCode}
                  onChange={handleChange}
                />
              </form>
              <Button
                variant="contained"
                type="submit"
                value="Submit"
                color="primary"
                onClick={submitHandler}
                disabled={zipCode.length > 0 && usZips[zipCode] ? false : true}
              >
                Submit
              </Button>
            </label>
            <br />
            <label>
              Type of incidents
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Presence}
                      onChange={handleTypeChange}
                      name="Presence"
                      color="primary"
                    />
                  }
                  label="Presence"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Soft}
                      onChange={handleTypeChange}
                      name="Soft"
                      color="primary"
                    />
                  }
                  label="Empty-hand control soft technique"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Hard}
                      onChange={handleTypeChange}
                      name="Hard"
                      color="primary"
                    />
                  }
                  label="Empty-hand control hard technique"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Projectiles}
                      onChange={handleTypeChange}
                      name="Projectiles"
                      color="primary"
                    />
                  }
                  label="Projectiles"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Chemical}
                      onChange={handleTypeChange}
                      name="Chemical"
                      color="primary"
                    />
                  }
                  label="Chemical"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.EnergyDevices}
                      onChange={handleTypeChange}
                      name="EnergyDevices"
                      color="primary"
                    />
                  }
                  label="Conducted energy devices"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Miscellaneous}
                      onChange={handleTypeChange}
                      name="Miscellaneous"
                      color="primary"
                    />
                  }
                  label="Miscellaneous"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.Other}
                      onChange={handleTypeChange}
                      name="Other"
                      color="primary"
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </label>
            <br />
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
                  {typeOfIncidents(type)}
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
              {multiIncidents ? (
                multiIncidents.map(incident => {
                  return (
                    <div>
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
                </div>
              )}
              <button className="x" onClick={() => setSelected(null)}>
                close
              </button>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
