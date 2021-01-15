import React, { useState, useEffect } from "react";

export default function ViewReservation() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/reservation").then((res) => res.json());

      console.log(result);
      setReservation(result);
    })();
  }, []);

  return (
    <>
      <p className="mealName text"> Total Reservations</p>

      <div>
        {reservation?.map((item) => (
          <div className="meal-list">
            <li key={item.meal_id}>
              {item.title} >>>>>>Total Guest:{item.total_guest}
            </li>
          </div>
        ))}
      </div>
    </>
  );
}
