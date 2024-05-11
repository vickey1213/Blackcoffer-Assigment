import React from "react";
import "../assets/rightPane.css";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";

export const LikelihoodGraph = ({ allData }) => {
  let LikelihoodData = [];

  allData.map((data) => {
    let obj = { year: data.end_year, max: 10, likelihood: data.likelihood };
    LikelihoodData.push(...LikelihoodData, obj);
  });

  return (
    <div className="newUsersDiv">
      <div className="chartHeader">
        <p>Likelihood</p>
      </div>
      <Paper className="paper">
        <Chart className="chart" data={LikelihoodData}>
          <BarSeries
            valueField="max"
            argumentField="year"
            className="upperBar"
          />
          <BarSeries
            valueField="likelihood"
            argumentField="year"
            className="lowerBar"
          />
        </Chart>
      </Paper>
    </div>
  );
};
