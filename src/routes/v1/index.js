const express = require("express");
const cityRoutes = require("./city-routes");
const airplaneRoutes = require("./airplane-routes");
const airportRoutes = require("./airport-routes");
const { InfoController } = require("../../controllers");
const router = express.Router();

router.use("/airplanes", airplaneRoutes);

router.get("/info", InfoController.info);

router.use("/cities", cityRoutes);

router.use("/airports", airportRoutes);

module.exports = router;
