const express = require("express");

const { CityController } = require("../../controllers");

const router = express.Router();

// /api/v1/cities POST
router.post("/", CityController.createCity);
router.delete("/:id", CityController.destroyCity);
router.patch("/:id", CityController.updateCity);
router.get('/',CityController.getCities);

module.exports = router;
