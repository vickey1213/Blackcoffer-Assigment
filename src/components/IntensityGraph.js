import React from "react";
import "../assets/rightPane.css";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";

export const IntensityGraph = ({ allData }) => {
  let intensityData = [];

  allData.map((data) => {
    let obj = { year: data.end_year, max: 100, intensity: data.intensity };
    intensityData.push(...intensityData, obj);
  });

  return (
    <div className="newUsersDiv">
      <div className="chartHeader">
        <p>Intensity</p>
      </div>
      <Paper className="paper">
        <Chart className="chart" data={intensityData}>
          <BarSeries
            valueField="max"
            argumentField="year"
            className="upperBar"
          />
          <BarSeries
            valueField="intensity"
            argumentField="year"
            className="lowerBar"
          />
        </Chart>
      </Paper>
    </div>
  );
};
