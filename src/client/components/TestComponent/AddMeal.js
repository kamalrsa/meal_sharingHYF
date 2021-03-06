import React, { useState } from "react";
export function AddMeal() {
  //const [addMeal, setAddMeal] = useState();
  const [mealName, setMealName] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [reservation, setReservation] = useState("");
  const [date, setDate] = useState(null);
  function onSubmit() {
    async function fetchMeal() {
      await fetch("/api/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: mealName,
          description: desc,
          location: location,
          created_date: date,
          max_reservations: reservation,
          price: price,
        }),
      });
    }
    fetchMeal();
    alert("The meal has been added to the list");
  }

  return (
    <div className="mealName">
      <form>
        <label>Meal Name</label> <br></br>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Description</label> <br></br>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>{" "}
        <br></br>
        <label>Location</label>
        <br></br>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <br></br>
        <label>Price</label>
        <br></br>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>
        <label>Maxs_reservation</label>
        <br></br>
        <input
          type="text"
          value={reservation}
          onChange={(e) => setReservation(e.target.value)}
        ></input>
        <br></br>
        <label>Date</label>
        <br></br>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <br></br>
        <button onClick={onSubmit}> ADD MEAL</button>
      </form>
    </div>
  );
}
