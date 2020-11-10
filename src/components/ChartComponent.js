import React from 'react';
import styled from 'styled-components';

import HrfChart from './HrfChart';

const ChartContents = styled.div`
  height: 75vh;
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 0;
`;

export default function ChartComponent() {
  return (
    <ChartContents>
      <HrfChart />
    </ChartContents>
  );
}
