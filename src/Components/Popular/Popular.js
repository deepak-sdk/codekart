import React, { useEffect, useState } from "react";
import "./Popular.scss";

function Popular() {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1"
        );
        const data = await response.json();
        const fetchedDishes = data.popularDishes;

        setDishes(fetchedDishes);
      } catch (error) {
        console.error("Error fetching data:", error);
        
      }
    };

    fetchData();
  }, []);

  return (
    <div className="popular-dishes-container">
      <h2>Popular Dishes</h2>
      <div className="popular-dishes-icon-container">
        {dishes.map((ele) => (
          <div className="popular-dishes" key={ele.id}>
            <img src={ele.image} />
            <p>{ele.name}</p>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default Popular;
