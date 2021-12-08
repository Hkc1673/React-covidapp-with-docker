import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequest } from "./store/actions";
import SummaryCard from "./components/Card";
import Header from "./components/Header";
import FormBar from "./components/Form";
import DataTable from "./components/DataTable";
import Loading from "./components/Loading";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const { countries_case, countries_name, global_case, fetching } = useSelector(
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

  const onSelect = (result) => {
    setCountry(result);
  };

  const onChange = (startDate, endDate) => {
    setFrom(startDate);
    setTo(endDate);
  };

  const onSubmit = () => {
    getTable();
  };
console.log("fetching", fetching)
if(fetching){
  return <Loading />
}
  return (
    <div className="container">
      <Header />
      <SummaryCard globalCase={global_case} />
      <FormBar
        countriesName={countries_name}
        onSubmit={onSubmit}
        onSelect={onSelect}
        onChange={onChange}
      />
      <DataTable countriesCase={countries_case} />
    </div>
  );
}

export default App;
