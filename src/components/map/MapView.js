import * as React from 'react';
import ReactMapGL from 'react-map-gl';
// components
import IncidentsViewer from './IncidentsViewer';
import ClusterMarkers from './ClusterMarkers';
// styles
import 'mapbox-gl/dist/mapbox-gl.css';

function MapView() {
  const minZoom = 2.75;
  const maxZoom = 17;

  // state variable for map viewport state
  const [viewport, setViewport] = React.useState({
    latitude: 41.850033,
    longitude: -97.6500523,
    zoom: minZoom,
  });

  // state variable for interacting with MapboxGL map
  const [settings, setSettings] = React.useState({
    dragRotate: false,
    scrollZoom: true,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });

  // mapRef is used to get current bounds of the map
  const mapRef = React.useRef();

  // state variable
  const [incidentsOfInterest, setIncidentsOfInterest] = React.useState();

  // get map 'bounds'
  // --> getMap(), getBounds(), toArray(), flat() come from react-map-gl
  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

  return (
    <div style={{ display: 'flex', width: '100vw' }}>
      {/* map contiainer */}
      <div className="map" style={{ width: '75vw' }}>
        {/* actual map component*/}
        <ReactMapGL
          {...viewport}
          {...settings}
          maxZoom={maxZoom}
          minZoom={2.75}
          width={'fit'}
          height={'70vh'}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={newViewport => {
            setViewport({ ...newViewport });
          }}
          ref={mapRef}
        >
          <ClusterMarkers
            mapRef={mapRef}
            viewport={viewport}
            bounds={bounds}
            setViewport={setViewport}
            setIncidentsOfInterest={setIncidentsOfInterest}
          />
        </ReactMapGL>
      </div>
      {/* incident (sidebar) viewer when viewing map*/}
      <IncidentsViewer
        incidentsOfInterest={incidentsOfInterest}
        setIncidentsOfInterest={setIncidentsOfInterest}
      />
    </div>
  );
}

export default MapView;
