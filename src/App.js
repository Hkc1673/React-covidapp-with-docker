import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequest } from "./store/actions";
import { Table, DatePicker, AutoComplete, Button } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import Nodata from "./components/NoData";
import virus from "./assets/images/virus.png";
import SummaryCard from "./components/Card";

const { RangePicker } = DatePicker;

function App() {
  const { countries_case, countries_name, global_case } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [country, setCountry] = useState("Antigua-and-Barbuda");
  const [from, setFrom] = useState("2020-12-01T16:53:26.115Z");
  const [to, setTo] = useState("2021-02-01T16:53:26.115Z");

  useEffect(() => {
    getTable();
    // eslint-disable-next-line
  }, []);

  const getTable = () => {
    dispatch(apiRequest(country, from, to));
  };

  const onSelect = (value) => {
    const result = value.replace(/ /g, "-");
    setCountry(result);
  };

  function onChange(value, dateString) {
    if (value !== null && value !== undefined) {
      const dateobj1 = new Date(value[0]._d);
      const dateobj2 = new Date(value[1]._d);
      const startDate = dateobj1.toISOString();
      const endDate = dateobj2.toISOString();
      setFrom(startDate);
      setTo(endDate);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    getTable();
  }

  const columns = [
    { title: "Country", dataIndex: "Country", key: "name" },
    { title: "Cases", dataIndex: "Cases", key: "confirm" },
    { title: "Date", dataIndex: "Date", key: "date" },
    { title: "Status", dataIndex: "Status", key: "status" },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>COVID 19 APP</h1>
        <img src={virus} alt="covid19" className="header-image" />
      </div>
      <div className="card">
        <SummaryCard globalCase={global_case} />
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit} className="form">
          <div>
            <RangePicker onChange={onChange} allowClear />
          </div>
          <div>
            <AutoComplete
              onSelect={onSelect}
              placeholder="Select country..."
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              dropdownMatchSelectWidth={252}
              style={{
                width: 300,
              }}
            >
              {countries_name !== null
                ? countries_name.map((item) => (
                    <AutoComplete.Option key={item.ID} value={item.Country}>
                      {item.Country}
                    </AutoComplete.Option>
                  ))
                : null}
            </AutoComplete>
          </div>
          <div>
            <Button htmlType="submit" type="primary" size="large">
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="table">
        {countries_case.length > 0 ? (
          <Table dataSource={countries_case} columns={columns} />
        ) : (
          <Nodata />
        )}
      </div>
    </div>
  );
}

export default App;
