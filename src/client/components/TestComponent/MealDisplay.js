import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import img from "./../../assets/images/shrimp.png";

export default function MealDisplay() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/meals").then((res) => res.json());

      console.log(result);
      setMeal(result);
    })();
  }, []);

  return (
    <>
      <style>{"body { background-color:  #FFF8DC; }"}</style>
      <p> Name of Meals</p>

      <div className="mealName">
        <p className="text"> For Reservation: Click on Meal </p>
        {meal?.map((item) => (
          <NavLink to={"/meal-display/" + item.id}>
            <div className="meal-list">
              {item.title} ----------{item.price}
              dkk <img src={img} alt height="44" width="100"></img>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
