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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import '../../styles/index.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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
    height: '76vh',
  });
  const [selected, setSelected] = useState(null);
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
  const [filteredData, setFilterData] = useState(null);
  const mapRef = useRef();
  const classesForStateFilter = stylesForCityFilter();
  const classesForZipCodeFilter = useStylesForZipCodeFilter();
  const classes = useStyles();
  const submitZipCodeHandler = e => {
    e.preventDefault();
    setViewport({
      latitude: usZips[zipCode].latitude,
      longitude: usZips[zipCode].longitude,
      zoom: 10,
      width: '100vw',
      height: '76vh',
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
        height: '76vh',
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
  const handleZipCodeChange = e => {
    setZipCode(e.target.value);
  };
  const handleTypeChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function getFirstType(types) {
    let firstType = '';
    for (let i = 0; i < types.length; i++) {
      if (types[i] === ',') {
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
          <i
            class="fa fa-map-marker"
            style={{ 'font-size': '2rem', color: 'DarkRed' }}
          />
        </div>
      );
    } else if (data.includes('Soft')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'Green', 'font-size': '2rem' }}
          />
        </div>
      );
    } else if (data.includes('Hard')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'Turquoise', 'font-size': '2rem' }}
          />
        </div>
      );
    } else if (data.includes('Projectiles')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'RoyalBlue', 'font-size': '2rem' }}
          />
        </div>
      );
    } else if (data.includes('Chemical')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'PaleVioletRed', 'font-size': '2rem' }}
          />
        </div>
      );
    } else if (data.includes('EnergyDevices')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'Magenta', 'font-size': '2rem' }}
          />
        </div>
      );
    } else if (data.includes('Miscellaneous')) {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'LightSlateGrey', 'font-size': '2rem' }}
          />
        </div>
      );
    } else {
      return (
        <div className="incidents_icons">
          <i
            class="fa fa-map-marker"
            style={{ color: 'Red', 'font-size': '2rem' }}
          />
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
    <div className="map-section">
      <div className="filter-title">
        <div className="filter_bar">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
              <React.Fragment>
                <Button
                  variant="contained"
                  color="primary"
                  {...bindTrigger(popupState)}
                >
                  OPEN FILTER
                </Button>
                <Menu {...bindMenu(popupState)}>
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
                        onChange={handleZipCodeChange}
                      />
                    </form>
                    <button
                      className="submit-zip-code"
                      variant="contained"
                      type="submit"
                      value="Submit"
                      color="primary"
                      onClick={submitZipCodeHandler}
                      disabled={
                        zipCode.length > 0 && usZips[zipCode] ? false : true
                      }
                    >
                      Submit
                    </button>
                  </label>
                  <br />
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
                          ></Checkbox>
                        }
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'DarkRed' }}
                            />{' '}
                            Presence
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'Green' }}
                            />{' '}
                            Soft technique
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'Turquoise' }}
                            />{' '}
                            Hard technique
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'RoyalBlue' }}
                            />{' '}
                            Projectiles
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'PaleVioletRed' }}
                            />{' '}
                            Chemical
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'Magenta' }}
                            />{' '}
                            Energy devices
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'LightSlateGrey' }}
                            />{' '}
                            Miscellaneous
                          </div>
                        }
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
                        label={
                          <div>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: 'Red' }}
                            />{' '}
                            Other
                          </div>
                        }
                      />
                    </FormGroup>
                  </label>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
        <h1 className="map-title">Find Excessive Force Incidents</h1>
      </div>
      <div className="container">
        <div className="map_box">
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
                      setSelected([
                        latitude,
                        longitude,
                        text,
                        type,
                        date,
                        link,
                      ]);
                    }}
                    style={{ cursor: 'pointer' }}
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
              >
                <Card className={classes.root} style={{ width: '30vh' }}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {selected[3]}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {selected[2]}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {selected[4]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <a
                        href={selected[5]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </Button>
                  </CardActions>
                </Card>
                <div className="pop-up-close">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setSelected(null)}
                  >
                    close
                  </Button>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
          <a href="#about" className="next-to-about">
            <i class="fa fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
