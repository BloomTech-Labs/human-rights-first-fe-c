import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
const BarChart = data => {
  const chart = useRef(null);
  useLayoutEffect(() => {
    // Create chart
    let xy_chart = am4core.create('chartdiv', am4charts.XYChart);
    // Set data
    xy_chart.data = data.data;
    // X-Axis category
    let categoryAxis = xy_chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'state';
    categoryAxis.title.text = 'States';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.renderer.labels.template.rotation = 270;
    // Y-Axis category
    let valueAxis = xy_chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.dataFields.category = 'count';
    valueAxis.title.text = 'Count';
    // Create series
    let series = xy_chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'state';
    series.name = 'count';
    series.tooltipText = '{name}: [bold]{valueY}[/]';
    series.stacked = true;
    // Add cursor
    xy_chart.cursor = new am4charts.XYCursor();
    chart.current = xy_chart;
    return () => {
      xy_chart.dispose();
    };
  }, []);
  return (
    <>
      <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};
export default BarChart;
