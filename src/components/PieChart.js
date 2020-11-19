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

    // set legend
    pie_chart.legend = new am4charts.Legend();

    // configure legend
    pie_chart.legend.labels.template.textDecoration = 'none';
    pie_chart.legend.valueLabels.template.textDecoration = 'none';

    var as = pie_chart.legend.labels.template.states.getKey('active');
    as.properties.textDecoration = 'line-through';
    as.properties.fill = am4core.color('#000');

    var as2 = pie_chart.legend.valueLabels.template.states.getKey('active');
    as2.properties.textDecoration = 'line-through';
    as2.properties.fill = am4core.color('#000');

    return () => {
      pie_chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '60vh' }}></div>;
};
export default PieChart;
