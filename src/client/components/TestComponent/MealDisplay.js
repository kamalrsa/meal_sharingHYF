import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

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
      <p> Name of Meals</p>

      <div className="mealName">
        <p className="text"> Reserve Your MEAL</p>
        {meal?.map((item) => (
          <div className="meal-list">
            <NavLink to={"/meal-display/" + item.id}>
              {item.title} ----------{item.price} dkk
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
