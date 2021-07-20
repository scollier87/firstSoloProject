'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Bookings.associate = function(models) {
    Bookings.hasMany(model.Spots, { foreignKey: 'spotId'});
    Bookings.belongsTo(model.Users, { foreignKey: 'userId'})
  };
  return Bookings;
};