'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    gameSize: DataTypes.STRING

  }, {});
  Bookings.associate = function(models) {
    Bookings.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Bookings.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Bookings;
};