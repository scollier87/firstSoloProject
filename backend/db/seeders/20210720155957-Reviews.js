'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Reviews'
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 1,
        review:"The playgrounds of Venice Beach are the temple of streetball on the Pacific coast.",
      },

      {
        userId: 2,
        spotId: 1,
        review: "Come if you're ready to earn your win!"
      },

      {
        userId: 3,
        spotId: 1,
        review: "I saw Kobe Bryant!"
      },

      {
        userId: 4,
        spotId: 1,
        review: "Go Lakers!"
      }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Reviews'
    return queryInterface.bulkDelete(options, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
