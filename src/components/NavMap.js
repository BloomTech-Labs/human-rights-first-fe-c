import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const linkStyle = styled.a``;

export default function NavMap() {
  return (
    <div className="map-nav">
      <div className="left-map-nav">
        <Link to="/">view map</Link>
        <Link to="/chart">view chart</Link>
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
