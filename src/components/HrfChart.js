import React from 'react';
import { Bar } from 'react-chartjs-2';

const HrfChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            'Philly',
            'Boston',
            'Detroit',
            'Kissimmee',
            'Houston',
            'Chicago',
          ],
          datasets: [
            {
              label: '# of incidents',
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        }}
        height={580}
        width={1360}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default HrfChart;
