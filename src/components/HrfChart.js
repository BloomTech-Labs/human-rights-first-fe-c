import React from 'react';
import { Bar } from 'react-chartjs-2';

const HrfChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        }}
        height={580}
        width={1360}
      />
    </div>
  );
};

export default HrfChart;
