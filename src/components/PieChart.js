import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const PieChart = data => {
  const chart = useRef(null);
  useLayoutEffect(() => {
    //   creates instance of chart
    let pie_chart = am4core.create('chartdiv', am4charts.PieChart);
    //   sets data
    pie_chart.data = data.data;

    //   creates a new series
    let pieSeries = pie_chart.series.push(new am4charts.PieSeries());
    // sets up series
    pieSeries.dataFields.value = 'count';
    pieSeries.dataFields.category = 'type_of_force';
    chart.current = pie_chart;
    return () => {
      pie_chart.dispose();
    };
  }, []);
  return <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>;
};
export default PieChart;
