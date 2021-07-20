'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};