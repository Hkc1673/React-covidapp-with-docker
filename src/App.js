import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequest } from "./store/actions";
import { Table, DatePicker, AutoComplete } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import Nodata from "./noData";

const { RangePicker } = DatePicker;

function App() {
  const { countries_case, countries_name} = useSelector((state) => state);
  const dispatch = useDispatch();

  const [country, setCountry] = useState("Antigua-and-Barbuda");
  const [from, setFrom] = useState("2020-12-01T16:53:26.115Z");
  const [to, setTo] = useState("2021-02-01T16:53:26.115Z");

  useEffect(() => {
    getTable();
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
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>COVID 19 APP</h1>
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
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <div className="table">
        {countries_case.length > 0 ? (
          <Table dataSource={countries_case} columns={columns} />
        ) : (
          <Nodata/>
        )}
      </div>
    </div>
  );
}

export default App;
