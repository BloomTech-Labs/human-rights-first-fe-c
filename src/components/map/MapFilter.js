import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import axios from 'axios';
import Map from '../map/Map';

const StyledDiv = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MapFilter = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/')
      .then(res => {
        dispatch({ type: 'GETDATA', payload: res.data });
      })
      .catch(err => {
        window.alert('No incident data available. Please try again later.');
      });
  }, []);

  const data = useSelector(state => state.data);

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const searchResults = data.filter(incident => {
    return incident.city.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <StyledDiv>
      <StyledDiv>
        <input
          className="form-control"
          value={searchInput}
          placeholder="search by keyword"
          onChange={handleSearchInput}
        />
      </StyledDiv>
      <Map filteredData={searchResults} />
    </StyledDiv>
  );
};

export default MapFilter;
