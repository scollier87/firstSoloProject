'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};