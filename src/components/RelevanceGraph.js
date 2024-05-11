import React from "react";
import "../assets/rightPane.css";
import { Chart, BarSeries } from "@devexpress/dx-react-chart-material-ui";
import Paper from "@mui/material/Paper";

export const RelevanceGraph = ({ allData }) => {
  let RelevanceData = [];

  allData.map((data) => {
    let obj = { year: data.end_year, max: 10, relevance: data.relevance };
    RelevanceData.push(...RelevanceData, obj);
  });

  return (
    <div className="newUsersDiv">
      <div className="chartHeader">
        <p>Relevance</p>
      </div>
      <Paper className="paper">
        <Chart className="chart" data={RelevanceData}>
          <BarSeries
            valueField="max"
            argumentField="year"
            className="upperBar"
          />
          <BarSeries
            valueField="relevance"
            argumentField="year"
            className="lowerBar"
          />
        </Chart>
      </Paper>
    </div>
  );
};
