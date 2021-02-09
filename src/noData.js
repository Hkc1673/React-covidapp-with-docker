import React from "react";
import "./noData.css";
import nodata from "./nodata.png"

const Nodata = () => {
  return (
    <div className="nodata">
      <div>
        <img src={nodata} alt="nodata"/>
      </div>
    </div>
  );
};

export default Nodata;
