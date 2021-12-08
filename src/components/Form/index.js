import React from "react";
import { DatePicker, AutoComplete, Button } from "antd";
import "./style.css";

const { RangePicker } = DatePicker;

const FormBar = ({ countriesName, onSubmit, onSelect, onChange }) => {
  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const _onChange = (value, dateString) => {
    if (value !== null && value !== undefined) {
      const dateobj1 = new Date(value[0]._d);
      const dateobj2 = new Date(value[1]._d);
      const startDate = dateobj1.toISOString();
      const endDate = dateobj2.toISOString();
      onChange(startDate, endDate);
    }
  };

  const _onSelect = (value) => {
    const result = value.replace(/ /g, "-");
    onSelect(result);
  };

  return (
    <div className="form-container">
      <form onSubmit={_onSubmit} className="form">
        <div>
          <RangePicker onChange={_onChange} allowClear />
        </div>
        <div>
          <AutoComplete
            onSelect={_onSelect}
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
            {countriesName
              ? countriesName.map((item) => (
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
  );
};

export default FormBar;
