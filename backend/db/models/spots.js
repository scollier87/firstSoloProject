'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spots = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
    name: DataTypes.STRING,
  }, {});
  Spots.associate = function(models) {
    Spots.belongsTo(models.User, { foreignKey: 'userId'});
    Spots.hasMany(models.Image, { foreignKey: 'spotId'});
    Spots.hasMany(models.Booking, { foreignKey: 'spotId'});
    Spots.hasMany(models.Review, { foreignKey: 'spotId'});
  };
  return Spots;
};