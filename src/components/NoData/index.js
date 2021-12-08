import React from "react";
import "./style.css";
import nodata from "../../assets/images/nodata.png"

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
