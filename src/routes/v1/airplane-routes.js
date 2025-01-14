const express = require("express");
const router = express.Router();
const { AirplaneController } = require("../../controllers");
console.log("inside airplane route");
// /api/v1/airplanes post
router.post('/', AirplaneController.createAirplane);

module.exports = router;
