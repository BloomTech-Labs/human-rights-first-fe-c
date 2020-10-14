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
        console.log(err);
      });
  }, []);

  const data = useSelector(state => state.data);

  const [filteredData, setFilteredData] = useState(data);

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = e => {
    setSearchInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    let searchResults = data;
    if (searchInput) {
      searchResults = data.filter(incident => {
        return incident.city.toLowerCase().includes(searchInput.toLowerCase());
      });
    }
    setFilteredData(searchResults);
  }, [searchInput, data]);

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
      <Map filteredData={filteredData} />
    </StyledDiv>
  );
};

export default MapFilter;
