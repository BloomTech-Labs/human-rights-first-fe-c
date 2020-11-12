import React, { useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import axios from 'axios';
import resposnse from '.././database/response.json';

const DashboardChart = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const getIncidents = () => {
      setIncidents(resposnse);
    };
    getIncidents();
  }, []);

  let dash_chart = am4core.create('chartdiv', am4charts.XYChart);

  return (
    <div id="chartdiv" style={{ width: '100%', height: '500px' }}>
      {dash_chart} <p>hello</p>
    </div>
  );
};

export default DashboardChart;
