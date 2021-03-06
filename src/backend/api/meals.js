const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const result = await knex("meal").select("*").where({
      id: request.params.id,
    });
    response.send(result);
  } catch (error) {
    throw error;
  }
});
router.post("/", async (request, response) => {
  try {
    //console.log(request.body);
    const meal = await knex("meal").select("*").insert(request.body);
    /*  title: request.body.title,
      description: request.body.description,
      location: request.body.location,
      when: new Date(),
      max_reservations: request.body.max_reservations,
      price: request.body.price,
      created_date: new Date(), 
  }); */
    response.json(meal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
