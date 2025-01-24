const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT,async  () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  const { City,Airport } = require("./models");
//   const bengaluru = await City.findByPk(1, { include: { model: Airport } });
//   const airport = await Airport.create({
//     name: "Kempegowda Airport",
//     code: "BLR",
//     cityId: 1,
//   });
//   const dbpairport = await bengaluru.createAirport({name: 'Huballi Airport', code: 'HBL'});
    await City.destroy({
      where: {
        id: 1,
      },
    });
});
