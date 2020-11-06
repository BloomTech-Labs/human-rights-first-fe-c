import React from 'react';

const IncidentCard = props => {
  const { dates, title, city, state, description } = props.IncidentCard;

  return (
    <div className="incident-card">
      <h1>{title}</h1>
      <div className="location-date">
        <em>
          `{city},{state} | {dates}`
        </em>
      </div>
      <div className="incident-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IncidentCard;
