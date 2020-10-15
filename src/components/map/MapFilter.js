import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';
import Map from '../map/Map';

// styled component imports
import { StyledDiv } from '../../styles/StyledComponents';

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
      <Map filteredData={searchResults} />
      <StyledDiv>
        <input
          className="form-control"
          value={searchInput}
          placeholder="search by city"
          onChange={handleSearchInput}
        />
      </StyledDiv>
    </StyledDiv>
  );
};

export default MapFilter;
