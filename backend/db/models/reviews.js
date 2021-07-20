'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Users, { foreignKey: 'userId'});
    Reviews.belongsTo(models.Spots, { foreignKey: 'spotId'})
  };
  return Reviews;
};