'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        url: "https://storage.googleapis.com/explorest-photo-usa/california/tlund-erwin-basketball-compressed.jpg"
      },

      {
        spotId: 2,
        url: "https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2021/05/rucker-park-twitter-black-enterprise.jpg"
      },

      {
        spotId: 3,
        url: "https://www.courtsoftheworld.com/upload/courts/6291/1/COTW-16th-Susquehanna-1384952159.jpg"
      },

      {
        spotId: 4,
        url: "https://www.nycgovparks.org/photo_gallery/full_size/23171.jpg"
      },

      {
        spotId: 5,
        url: "http://4.bp.blogspot.com/-2YbVTEZUsmQ/TiQQ3koSQjI/AAAAAAAAH6Y/hA8URRDnrvc/s640/munichs_trippedout_basketball_court-1.jpg"
      },

      {
        spotId: 6,
        url: "https://c8.alamy.com/comp/RK9WWG/berlin-schneberg-park-am-gleisdreieck-basketball-RK9WWG.jpg"
      },

      {
        spotId: 7,
        url: "https://www.courtsoftheworld.com/blog/wp-content/uploads/2020/11/Dubrovnik-Croatia-basketball-court-1024x683.jpg"
      },

      {
        spotId: 8,
        url: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_05/3208856/200130-manila-kobe-mc-1418.JPG"
      },

      {
        spotId: 9,
        url: "https://www.nycgovparks.org/photo_gallery/full_size/23321.jpg"
      },

      {
        spotId: 10,
        url: "https://www.courtsoftheworld.com/upload/courts/77/0/COTW-mosswood-park-1599951086.jpg"
      },

      {
        spotId: 11,
        url: "https://www.likealocalguide.com/media/cache/44/cf/44cfcb3f9382c2f04d3a78642c465de7.jpg"
      },

      {
        spotId: 12,
        url: "https://www.nycgovparks.org/photo_gallery/full_size/23171.jpg"
      },

      {
        spotId:13,
        url: "https://www.courtsoftheworld.com/upload/courts/91/0/COTW_Yoyogi-Park_1234192166.jpg"
      },

      {
        spotId: 14,
        url: "https://static.dezeen.com/uploads/2017/06/basket-court-pigalle-studio-architecture-public-leisure-paris-france-_dezeen_hero-b.jpg"
      },

      {
        spotId: 15,
        url: "https://thumbor.granitemedia.com/angels-gate-park-in-san-pedro-california/t4QDT3Nhp59xVwXMK6z2RUlHpnI=/800x600/filters:format(webp):quality(80)/granite-web-prod/69/b1/69b1eaae662041709e833f4f2bb437c1.jpeg"
      },

      {
        spotId: 16,
        url: "https://www.bardown.com/polopoly_fs/1.1625470!/fileimage/httpImage/image.jpg_gen/derivatives/default/david-crombie.jpg"
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
