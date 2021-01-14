const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const review = await knex("review").select("*");
    response.json(review);
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
    const result = await knex("review")
      .select("*")

      .insert(request.body);

    response.send(result);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
