import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Reservation() {
  const { id } = useParams();
  const [guest, setGuest] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [filterMeal, setFilterMeal] = useState({});
  console.log(filterMeal);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/meals/" + id).then((res) => res.json());

      console.log(result);
      setFilterMeal(result);
    })();
  }, [id]);

  function onSubmit() {
    async function fetchReservation() {
      await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number_of_guests: guest,
          meal_id: id,
          created_date: date,
          name: name,
          phone_no: mobile,
        }),
      });
    }
    fetchReservation();
    alert("Reservation has done");
  }

  return (
    <div className="mealName">
      <div className="col-12 col-md-9">
        <form>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">No Of Guests</label>
            <div class="col-md-10">
              <input
                type="text"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Name</label>
            <div className="col-md-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-3 col-form-label">Phone_No.</label>
            <div className="col-md-5">
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-10">
              <label className="col-md-3 col-form-label">Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
          </div>
          <button className="col-md-4" onClick={onSubmit}>
            Reserve
          </button>
          <h1>{filterMeal.title}</h1>
        </form>
      </div>
    </div>
  );
}
