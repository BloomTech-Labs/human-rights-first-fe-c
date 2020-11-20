import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMap() {
  return (
    <div className="map-nav">
      <div className="left-map-nav">
        <Link to="/">View Map</Link>
        <Link to="/charts-by-state">Charts by State</Link>
        <Link to="/charts-by-force">Charts by Force</Link>
      </div>
      <div className="right-map-nav">
        <input
          type="search"
          placeholder="Search by city, state, zip, or date"
        />
      </div>
    </div>
  );
}
