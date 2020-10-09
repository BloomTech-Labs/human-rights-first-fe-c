import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledDiv = styled.div`
  /* padding: 10rem; */
  margin: 2rem;
`;

// manage searchInput locally on component level
// use searchInput to filter through current data (grab using useSelector), and update state (using useDispatch)

const Map_Filter = () => {
  const [searchInput, setSearchInput] = useState('');

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  return (
    <StyledDiv>
      <br />
      <br />
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />
    </StyledDiv>
  );
};

export default Map_Filter;
