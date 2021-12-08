import React from "react";
import "./style.css";
import { Table } from "antd";
import Nodata from "../NoData";

const DataTable = ({ countriesCase }) => {
  const columns = [
    { title: "Country", dataIndex: "Country", key: "name" },
    { title: "Cases", dataIndex: "Cases", key: "confirm" },
    { title: "Date", dataIndex: "Date", key: "date" },
    { title: "Status", dataIndex: "Status", key: "status" },
  ];
  return (
    <div className="table">
      {countriesCase.length > 0 ? (
        <Table dataSource={countriesCase} columns={columns} />
      ) : (
        <Nodata />
      )}
    </div>
  );
};

export default DataTable;
