import Plotly from 'plotly.js';
// import Plotly from 'react-plotly.js';
import React from 'react';

const PlotlyMap = () => {
  function runMap() {
    Plotly.d3.csv(
      'https://gist.githubusercontent.com/jessieliu1/ddda59513cefbdc6309a4ce9d639cfc9/raw/026a51c6c34bca1b2675ac15c26e618fcab03d8e/us-state-capitals.csv',
      function(err, rows) {
        function unpack(rows, key) {
          return rows.map(function(row) {
            return row[key];
          });
        }

        var cityName = unpack(rows, 'origin'),
          capitalName = unpack(rows, 'blahblah'),
          cityLat = unpack(rows, 'latitude'),
          cityLon = unpack(rows, 'longitude'),
          hoverText = [],
          scale = 0;

        for (var i = 0; i < capitalName.length; i++) {
          var currentText = cityName[i] + ' capital: ' + capitalName[i];

          hoverText.push(currentText);
        }

        var data = [
          {
            type: 'scattergeo',
            locationmode: 'USA-states',
            lat: cityLat,
            lon: cityLon,
            hoverinfo: 'text',
            text: hoverText,
            marker: {
              line: {
                color: 'blue',
                width: 1,
              },
            },
          },
        ];

        var layout = {
          title: 'Capital Cities of the United States',
          showlegend: false,
          geo: {
            scope: 'usa',
            projection: {
              type: 'albers usa',
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)',
          },
        };

        Plotly.newPlot('myDiv', data, layout, { showLink: false });
      }
    );
  }
  return <div className="myDiv">{runMap()}</div>;
};

export default PlotlyMap;
