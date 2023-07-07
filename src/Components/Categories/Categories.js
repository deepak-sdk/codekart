import React from "react";
import './Categories.scss'

function Categories() {
  return (
    <div className="categories-container">
      <div className="categories categories-italian categories-active">
        <span>Italian</span>
      </div>
      <div className="categories categories-indian">
        <span>Indian</span>
      </div>
      <div className="categories categories-indian">
        <span>Indian</span>
      </div>
      <div className="categories categories-indian">
        <span>Indian</span>
      </div>
    </div>
  );
}
export default Categories;
