import React from "react";
import Back from '../../Icons/Group 1541.svg'
import "./SelectDishes.scss";

function SelectDishes() {
  return (
    <div className="select-dishes-container">
      <div className="select-dishes">
        <img src={Back} className="arrow-left"/>
        <h2>Select Dishes</h2>
      </div>
    </div>
  );
}

export default SelectDishes;
