'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.User, { foreignKey: 'userId'});
    Reviews.belongsTo(models.Spot, { foreignKey: 'spotId'})
  };
  return Reviews;
};