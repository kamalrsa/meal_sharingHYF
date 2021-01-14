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
      <p className="mealName"> Reservations</p>

      <div>
        {reservation?.map((item) => (
          <li key={item.meal_id}>
            {item.title} {item.total_guest}
          </li>
        ))}
      </div>
    </>
  );
}
