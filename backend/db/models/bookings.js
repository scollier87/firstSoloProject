'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.DATEONLY,
    gameSize: DataTypes.STRING

  }, {});
  Bookings.associate = function(models) {
    Bookings.belongsTo(models.Spot, { foreignKey: 'spotId' });
    Bookings.belongsTo(models.User, { foreignKey: 'userId' })
  };

  Bookings.prototype.formatDate = function() {
    const updatedDateTime = new Date(this.startDate);

    const splitDate = updatedDateTime.toString().split(" ")
    const dateItems = [splitDate[0], splitDate[1], splitDate[2], splitDate[3]]
    const newDateTime = dateItems.join(" ")
    const splitClock = splitDate[4].split(":")

    if (splitClock[0] > 12){
      const hr = splitClock[0] % 12
      const newTime = [hr, splitClock[1]].join(":")
      const response = [newDateTime, newTime].join(", ") + ' PM'
      return response
    }

    const newTime = [splitClock[0], splitClock[1]].join(":")
    const response = [newDateTime, newTime].join(", ") + ' AM'
    return response

    // return this.startDate;
  }

  return Bookings;
};