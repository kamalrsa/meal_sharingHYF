const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservation = await knex("reservation")
      .join("meal", "meal.id", "=", "reservation.meal_id")
      .select({ title: "meal.title", meal_id: "reservation.meal_id" })
      .sum({ total_guest: "reservation.number_of_guests" })
      .groupBy("meal_id");
    response.json(reservation);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    //console.log(request.body);
    const result = await knex("reservation").select("*").insert(request.body);

    response.json(result);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
