import React from 'react';
import styled from 'styled-components';

const ChartContents = styled.div`
  border: 1px dashed red;
  height: 75vh;
  width: 80vw;
  margin: auto;
`;

const Chart = () => {
  return (
    <ChartContents>
      <h1>Hello from chart component</h1>
    </ChartContents>
  );
};

export default Chart;
