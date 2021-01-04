import React, { useState, useEffect } from "react";

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

      <div>
        {meal?.map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </div>
    </>
  );
}
