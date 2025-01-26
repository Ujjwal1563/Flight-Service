const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
// /api/v1/airplanes post
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);
router.get('/',FlightController.getAllFlights);
module.exports = router;
