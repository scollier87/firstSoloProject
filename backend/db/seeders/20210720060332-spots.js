'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Spots', [
        {
          userId: 1,
          address: '1708-1798 Ocean Front Walk, Venice, CA 90291',
          city: 'Los Angeles',
          state: 'California',
          country: 'United States of America',
          lat: 33.992050285075344,
          lng: -118.47793584327933,
          name: 'Venice Beach Basketball Courts',
        },

        {
          userId: 2,
          address: '280 W 155th St, New York, NY 10039',
          city: 'New York',
          state: 'New York',
          country: 'United States of America',
          lat: 40.829035880037985,
          lng: -73.93591148536882,
          name: 'Rucker Park'
        },

        {
          userId: 3,
          address: '16th and Susquehanna, Philadelphia, PA 19121',
          city: 'Philadelphia',
          state: 'Pennsylvania',
          country: 'United States of America',
          lat: 39.98666019978848,
          lng: -75.15937462957893,
          name: 'North Philly',
        },

        {
          userId: 4,
          address: '6th Ave &, 6 W 3rd St, New York, NY 10014',
          city: 'New York',
          state: 'New York',
          country: 'United States of America',
          lat: 40.731248590866386,
          lng: --74.00093357187976,
          name: 'The Cage',
        },

        {
          userId: 5,
          address: 'Riesstraße 38, 80992 München, Germany',
          city: 'München',
          state: 'Germany',
          country: 'Germany',
          lat: 48.18098952026921,
          lng: 11.537425761371669,
          name: '3D Basketball Court',
        },

        {
          userId: 1,
          address: '10963 Berlin, Germany',
          city: 'Berlin',
          state: 'Germany',
          country: 'Germany',
          lat: 52.49544510024154,
          lng: 13.37343112148233,
          name: 'Gleisdreieck Park Courts',
        },

        {
          userId: 2,
          address: 'Dubrovnik, Croatia',
          city: 'Dubrovnik',
          state: 'Croatia',
          country: 'Croatia',
          lat: 42.651812370282805,
          lng: 118.074992248379495,
          name: 'City Wall Rooftop Court',
        },

        {
          userId: 3,
          address: 'Fort Bonifacio Tenement, Taguig, Metro Manila',
          city: 'Manila',
          state: 'Philippines',
          country: 'Philippines',
          lat: 14.516160163393536,
          lng: 121.03713406196363,
          name: 'Taguig Tenement Basketball Court',
        },

        {
          userId: 4,
          address: '6401 S Stony Island Ave., Jackson Park, Chicago, Illinois',
          city: 'Chicago',
          state: 'Illinois',
          country: 'United States of America',
          lat: 41.77895679595502,
          lng: -87.58564706015731,
          name: 'Jackson Park Basketball Courts',
        },

        {
          userId: 5,
          address: '3612 Webster St., Oakland, California',
          city: 'Oakland',
          state: 'California',
          country: 'United States of America',
          lat: 37.82376977424317,
          lng: -122.26088900075887,
          name: 'Mosswood Park Basketball Courts',
        },

        {
          userId: 1,
          address: 'Emmanouil Benaki 134, Strefi Hill, Athens',
          city: 'Strefi Hill',
          state: 'Athens',
          country: 'Greece',
          lat: 37.98722046579018,
          lng: 23.738670615153,
          name: 'Strefi Hill Court',
        },

        {
          userId: 2,
          address: '272 6th Ave., New York, New York',
          city: 'New York',
          state: 'New York',
          country: 'United States of America',
          lat: 40.731362226386416,
          lng: -74.00083734936145,
          name: 'West 4th Street Courts',
        },

        {
          userId: 3,
          address: '2 Chome-3 Jinnan, Tokyo',
          city: 'Jinnan',
          state: 'Tokyo',
          country: 'Japan',
          lat: 35.67155201693599,
          lng: 139.69672425500488,
          name: 'Yoyogi Park Basketball Courts',
        },

        {
          userId: 4,
          address: '17 rue Duperré, Paris',
          city: 'Duprré',
          state: 'Paris',
          country: 'France',
          lat: 348.88214764143682,
          lng: 2.3353644554248434,
          name: 'Pigalle Basketball Court',
        },

        {
          userId: 5,
          address: '3601 S Gaffey St., San Pedro, California',
          city: 'San Pedro',
          state: 'California',
          country: 'United States of America',
          lat: 33.71102356215158,
          lng: -118.29454982487975,
          name: 'Angels Gate Park Basketball Court',
        },

        {
          userId: 1,
          address: '115 Scadding Ave, Toronto, ON M5A 4H8, Canada',
          city: 'Toronto',
          state: 'Toronto',
          country: 'Canada',
          lat: 43.649552285624004,
          lng: -79.3642899541063,
          name: 'David Crombie Park Basketball Court',
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
