import * as React from 'react';
// components
import ChartsNavBar from '../ChartsNavBar';
import IncidentsViewer from './IncidentsViewer';
// styles
import 'mapbox-gl/dist/mapbox-gl.css';
import MapContainer from './MapContainer';

function MapView() {
  // state variable
  const [incidentsOfInterest, setIncidentsOfInterest] = React.useState();
  return (
    <>
      <ChartsNavBar />
      <div style={{ display: 'flex', width: '100vw' }}>
        <div style={{ width: '75vw' }}>
          <MapContainer setIncidentsOfInterest={setIncidentsOfInterest} />
        </div>
        <IncidentsViewer
          incidentsOfInterest={incidentsOfInterest}
          setIncidentsOfInterest={setIncidentsOfInterest}
        />
      </div>
    </>
  );
}

export default MapView;
