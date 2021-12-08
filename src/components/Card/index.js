import React from "react";
import { Card } from "antd";
import "./style.css";

const SummaryCard = ({ globalCase }) => {
  const gridStyle = {
    width: "33%",
    textAlign: "center",
  };

  return (
    <div className="card">
      <Card title="GLOBAL CASE" style={{ textAlign: "center" }}>
        <Card.Grid style={gridStyle}>
          <h4>New Confirmed</h4>
          <p>{globalCase.NewConfirmed}</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h4>Total Confirmed</h4>
          <p>{globalCase.TotalConfirmed}</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h4>New Deaths</h4>
          <p>{globalCase.NewDeaths}</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h4>Total Deaths</h4>
          <p>{globalCase.TotalDeaths}</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h4>New Recovered</h4>
          <p>{globalCase.NewRecovered}</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <h4>Total Recovered</h4>
          <p>{globalCase.TotalRecovered}</p>
        </Card.Grid>
      </Card>
    </div>
  );
};

export default SummaryCard;
