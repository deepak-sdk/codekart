import React from "react";
import Selectdate from '../../Icons/Select_date-01.svg'
import Selecttime from '../../Icons/Set_time-01.svg'

import "./DateTime.scss";

function DateTime() {
  return (
    <div className="date-time-container">
      <div className="date-container">
      <img src={Selectdate} alt="Selectdate" className="date-icon"/>
        <h2>21 May 2021</h2>
      </div>
      <div className="time-container">
        <img src={Selecttime} className="time-icon"/>
        <h2>10:30 Pm - 12:30 Pm</h2>
      </div>
    </div>
  );
}

export default DateTime;
