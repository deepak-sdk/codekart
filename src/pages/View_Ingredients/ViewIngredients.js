import React, { useState, useEffect } from "react";
import Picture2 from "../../Icons/Mask Group 17@2x.png";
import Picture1 from "../../Icons/pngtree-herbal-ingredients-transparent-image-png-image_3206949-removebg-preview@2x.png";
import Picture3 from "../../Icons/Group 393.png";
import "./ViewIngredients.scss";
import { Link } from "react-router-dom";

function ViewIngredients() {
  const [dishes, setDishes] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [spices, setSpices] = useState([]);
  const [appliances, setAppliances] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        );
        const data = await response.json();
        const fetchedDishes = data;
        console.log(fetchedDishes);

        setDishes(fetchedDishes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const fetchVegetables = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        );
        const data = await response.json();
        setVegetables(data.ingredients.vegetables);
        console.log(vegetables);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };

    fetchVegetables();

    const fetchSpices = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        );
        const data = await response.json();
        setSpices(data.ingredients.spices);
        console.log(spices);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };

    fetchSpices();

    const fetchAppliances = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        );
        const data = await response.json();
        setAppliances(data.ingredients.appliances);
        console.log(appliances);
      } catch (error) {
        console.error("Error fetching vegetables:", error);
      }
    };

    fetchAppliances();
  }, []);
  return (
    <div className="view-ingredients-container">
      <Link to="/">Back</Link>
      <div className="ingredient-name-star">
        <h1>{dishes.name}</h1>
        <button>4.2</button>
      </div>
      <p className="ingre-text">
        Mughlai Masala is a style of cookery developed in the Indian
        Subcontinent by the imperial kitchens of the Mughal Empire.
      </p>
      <div className="time-taken">
        <img src={Picture3}></img>
        <p>{dishes.timeToPrepare}</p>
      </div>
      <div className="people">
        <h2>Ingredients</h2>
        <p>For 2 People</p>
      </div>
      <div className="vegetables-container">
        <h2>Vegetables</h2>
        <div className="tables">
          {vegetables.map((vegetable, index) => (
            <div className="tables-veg" key={index}>
              <p>{vegetable.name}</p>
              <p>{vegetable.quantity}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="spices-container">
        <h2>Spices</h2>
        <div className="tables">
          {spices.map((spice, index) => (
            <div key={index} className="tables-veg">
              <p>{spice.name}</p>
              <p>{spice.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="appliances-container">
        <h2>Appliances</h2>
        <div className="tables">
          {appliances.map((spice, index) => (
            <div key={index} className="tables-veg">
              <p>{spice.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewIngredients;
