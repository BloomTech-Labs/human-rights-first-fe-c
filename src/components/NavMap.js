import React from 'react';

export default function NavMap() {
  return (
    <div className="map-nav">
      <div className="left-map-nav">
        <button>map</button>
        <button>view graph</button>
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
