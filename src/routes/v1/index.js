const express = require('express');
const cityRoutes= require('./city-routes')
const airplaneRoutes = require("./airplane-routes");
const { InfoController } = require('../../controllers');
const router = express.Router();

router.use('/airplanes', airplaneRoutes);

router.get('/info', InfoController.info);

router.use ('/cities', cityRoutes)

module.exports = router;
