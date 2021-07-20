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
    price: DataTypes.DECIMAL
  }, {});
  Spots.associate = function(models) {
    // associations can be defined here
  };
  return Spots;
};