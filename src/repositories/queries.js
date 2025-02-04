function addRowLockOnFlights(flightId) {
  return `Select * from flights where flights.id = ${flightId} for update`;
}

module.exports = {
  addRowLockOnFlights,
};
