import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
const temp_data = [
  {
    type_force: 'tear-gas',
    count: 15,
  },
  {
    type_force: 'rubber-bullet',
    count: 27,
  },
  {
    type_force: 'stun-grenade',
    count: 65,
  },
  {
    type_force: 'beat',
    count: 35,
  },
  {
    type_force: 'strike',
    count: 82,
  },
  {
    type_force: 'grab',
    count: 24,
  },
  {
    type_force: 'baton',
    count: 10,
  },
  {
    type_force: 'shove',
    count: 43,
  },
  {
    type_force: 'shoot',
    count: 56,
  },
  {
    type_force: 'spray',
    count: 13,
  },
];
const PieChart = () => {
  const chart = useRef(null);
  useLayoutEffect(() => {
    //   creates instance of chart
    let pie_chart = am4core.create('chartdiv', am4charts.PieChart);
    //   sets data
    pie_chart.data = temp_data;
    //   creates a new series
    let pieSeries = pie_chart.series.push(new am4charts.PieSeries());
    // sets up series
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'type_force';
    chart.current = pie_chart;
    return () => {
      pie_chart.dispose();
    };
  }, []);
  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>;
};
export default PieChart;
