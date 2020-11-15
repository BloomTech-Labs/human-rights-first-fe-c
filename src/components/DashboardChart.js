import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { PieData } from './PieData';

const DashboardChart = () => {
  console.log('piedata', PieData());

  return (
    <div className="dash-chart-container">
      <PieChart />
    </div>
  );
};
export default DashboardChart;
