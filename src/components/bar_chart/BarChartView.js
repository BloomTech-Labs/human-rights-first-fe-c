import React from 'react';
import ChartsNavBar from '../ChartsNavBar';
import BarChartContainer from './BarChartContainer';

const PieChartView = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ChartsNavBar />
      <BarChartContainer />
    </div>
  );
};

export default PieChartView;
