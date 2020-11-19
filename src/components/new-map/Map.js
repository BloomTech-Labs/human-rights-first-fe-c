import React from 'react';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import useSupercluster from 'use-supercluster';
// import 'mapbox-gl/dist/mapbox-gl.css';
import {
  ClusterMarker,
  IncidentContainer,
  IncidentsContainer,
  ClearIncidentsBtn,
} from '../../styles/MapStyles';
import { useIncidents } from '../../state/query_hooks/useIncidents';

function Map() {
  const maxZoom = 17;

  // setup map state
  const [viewport, setViewport] = React.useState({
    latitude: 41.850033,
    longitude: -97.6500523,
    zoom: 2.75,
  });
  const [settings, setSettings] = React.useState({
    dragRotate: false,
    scrollZoom: true,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
  });

  const mapRef = React.useRef();

  // load incident data
  const incidentsQuery = useIncidents();
  const incidents =
    incidentsQuery.data && !incidentsQuery.isError ? incidentsQuery.data : [];

  const incidentsHaveLatLong = incidents.filter(
    incident => incident.lat !== 0 && incident.long !== 0
  );

  const [incidentsOfInterest, setIncidentsOfInterest] = React.useState();
  // useSupercluster hook to cluster the data
  // --> geoJSON feature object
  const points = incidentsHaveLatLong.map(incident => {
    return {
      type: 'Feature',
      properties: {
        incident: incident,
        cluster: false,
        incident_id: incident.incident_id,
      },
      geometry: {
        type: 'Point',
        coordinates: [incident.long, incident.lat],
      },
    };
  });
  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

  // get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: {
      minPoints: 1,
      radius: 40,
      maxZoom: 20,
    },
  });

  return (
    <div style={{ display: 'flex', width: '100vw' }}>
      {/* map contiainer */}
      <div className="map" style={{ width: '75vw' }}>
        {/* actual map */}
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
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            return (
              isCluster && (
                <Marker
                  key={cluster.id}
                  latitude={latitude}
                  longitude={longitude}
                  offsetLeft={-(10 + (pointCount / points.length) * 600) / 2}
                  offsetTop={-(10 + (pointCount / points.length) * 600) / 2}
                >
                  <ClusterMarker
                    style={{
                      width: `${10 + (pointCount / points.length) * 600}px`,
                      height: `${10 + (pointCount / points.length) * 600}px`,
                    }}
                    onClick={() => {
                      setIncidentsOfInterest(null);
                      const clusterId = cluster.id;
                      const dataPoints = supercluster.getLeaves(
                        clusterId,
                        Infinity
                      );
                      console.log(dataPoints);
                      setIncidentsOfInterest(dataPoints);

                      if (viewport.zoom < maxZoom) {
                        const expansionZoom = Math.min(
                          supercluster.getClusterExpansionZoom(cluster.id),
                          maxZoom
                        );

                        setViewport({
                          ...viewport,
                          latitude,
                          longitude,
                          zoom: expansionZoom,
                          transitionInterpolator: new FlyToInterpolator({
                            speed: 1.5,
                          }),
                          transitionDuration: `auto`,
                        });
                      }
                    }}
                  >
                    {pointCount}
                  </ClusterMarker>
                </Marker>
              )
            );
          })}
        </ReactMapGL>
      </div>
      {/* incident (sidebar) viewer when viewing map*/}
      {!incidentsOfInterest && (
        <IncidentsContainer>
          <div style={{ textAlign: 'center' }}>
            Click a cluster on the map to view incident details below
          </div>
        </IncidentsContainer>
      )}
      {incidentsOfInterest && (
        <IncidentsContainer>
          <IncidentContainer>
            <ClearIncidentsBtn onClick={() => setIncidentsOfInterest()}>
              X
            </ClearIncidentsBtn>
            {incidentsOfInterest.map(incident => {
              const details = incident.properties.incident;
              const date = new Date(details.date);
              return (
                // each incident
                <>
                  <h1>{details.title}</h1>
                  <div className="location-info">{`${details.city} | ${details.state}`}</div>
                  <div className="date">{date.toISOString().slice(0, 10)}</div>
                  <div className="incident-description">{details.desc}</div>
                  <ul className="categories">
                    Categories:
                    {details.categories.map(tag => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                  <ul className="sources">
                    Sources:
                    {details.src.map(source => (
                      <li>
                        <a
                          href={source}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </a>
                      </li>
                    ))}
                  </ul>
                  <br />
                </>
              );
            })}
          </IncidentContainer>
        </IncidentsContainer>
      )}
    </div>
  );
}

export default Map;
