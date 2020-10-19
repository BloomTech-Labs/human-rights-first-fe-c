import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import Map from '../map/Map';

// styled component imports
import { StyledDiv, StyledFilterDiv } from '../../styles/StyledComponents';

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

  const [citySearchInput, setCitySearchInput] = useState('');
  const [stateSearchInput, setStateSearchInput] = useState('');

  const handleCitySearchInput = e => {
    setCitySearchInput(e.target.value.toLowerCase());
  };

  const handleStateSearchInput = e => {
    setStateSearchInput(e.target.value.toLowerCase());
  };

  const searchResults = data.filter(incident => {
    return (
      incident.city.toLowerCase().includes(citySearchInput.toLowerCase()) &&
      incident.state.toLowerCase().includes(stateSearchInput.toLowerCase())
    );
  });

  return (
    <StyledDiv>
      <Map filteredData={searchResults} />
      <StyledFilterDiv>
        <Input
          size="large"
          className="form-control"
          value={citySearchInput}
          placeholder="search by city"
          onChange={handleCitySearchInput}
        />
        <Input
          size="large"
          className="form-control"
          value={stateSearchInput}
          placeholder="search by state"
          onChange={handleStateSearchInput}
        />
      </StyledFilterDiv>
    </StyledDiv>
  );
};

export default MapFilter;
