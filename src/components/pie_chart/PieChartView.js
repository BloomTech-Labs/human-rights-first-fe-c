import React from 'react';
import ChartsNavBar from '../ChartsNavBar';
import PieChartContainer from './PieChartContainer';

const PieChartView = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ChartsNavBar />
      <PieChartContainer />
    </div>
  );
};

export default PieChartView;
