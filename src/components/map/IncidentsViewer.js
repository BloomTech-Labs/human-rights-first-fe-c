import React from 'react';

import {
  StyledIncidentsContainer,
  StyledIncidentContainer,
  StyledClearIncidentsBtn,
} from '../../styles/MapViewStyles';

function IncidentsViewer({ incidentsOfInterest, setIncidentsOfInterest }) {
  return !incidentsOfInterest ? (
    <StyledIncidentsContainer>
      <div style={{ textAlign: 'center' }}>
        Click a cluster on the map to view incident details below
      </div>
    </StyledIncidentsContainer>
  ) : (
    <StyledIncidentsContainer>
      <StyledClearIncidentsBtn onClick={() => setIncidentsOfInterest()}>
        X
      </StyledClearIncidentsBtn>
      <StyledIncidentContainer>
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
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  </li>
                ))}
              </ul>
              <br />
            </>
          );
        })}
      </StyledIncidentContainer>
    </StyledIncidentsContainer>
  );
}

export default IncidentsViewer;
