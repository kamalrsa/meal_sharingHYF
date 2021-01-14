import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function TotalReview() {
  const [review, setReview] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/reviews").then((res) => res.json());

      console.log(result);
      setReview(result);
    })();
  }, []);

  return (
    <>
      <p className="mealName"> Reviews</p>

      <div>
        {review?.map((item) => (
          <li key={item.id}>
            <NavLink to={"/total-reviews/" + item.id}>
              {item.comment}
              {item.stars}
              {item.meal_id}
            </NavLink>
          </li>
        ))}
      </div>
    </>
  );
}
