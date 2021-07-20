'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};