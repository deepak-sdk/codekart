import React, { useState, useEffect } from "react";
import DropDown from "../../Icons/Path 786.svg";
import Veg from "../../Icons/Group 359.svg";
import Star from "../../Icons/star.svg";
import MenuImage from "../../Icons/Mask Group 19@2x.png";
import Ref from "../../Icons/Group 508@2x.png";

import "./MenuList.scss";
import { Link } from "react-router-dom";

const MenuList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1"
        );
        const data = await response.json();
        const fetchedDishes = data.dishes;

        setDishes(fetchedDishes);
        console.log(fetchedDishes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recommended-menu-container">
      <div className="recommended-menu">
        <div className="recommended">
          <h2>Recommended</h2>
          <img src={DropDown} alt="Dropdown" />
        </div>
        <button>Menu</button>
      </div>
      <div className="overall-container">
        {" "}
        {dishes.map((ele) => (
          <div className="menu-container" key={ele.id}>
            <div className="menu-text-part">
              <div className="menu-type-rating">
                <h4>{ele.name}</h4>
                <img src={Veg} alt="veg" />
                <div className="rating-container">
                  <p>{ele.rating}</p>
                  <img src={Star} alt="rating-star" />
                </div>
              </div>
              <div className="refrigerator-container">
                <div className="ref">
                  <div className="refrigerator">
                    <img src={Ref} alt="refrigerator" />
                    <p>Refrigerator</p>
                  </div>
                  <div className="refrigerator refrigerator2">
                    <img src={Ref} alt="refrigerator " />
                    <p>Refrigerator</p>
                  </div>
                </div>
                {/* <hr/> */}
                <div className="view-lists">
                  <p>Ingredients</p>
                  <Link to="/view_ingredients">View Lists</Link>
                </div>
              </div>
              <div className="bio">
                <p>{ele.description}</p>
              </div>
            </div>
            <div className="menu-img-part">
              <img src={ele.image} alt="menu-img" />
              <button>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
