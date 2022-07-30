'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Events', [{
            name: 'McDonalds',
            address: 'HaHashmonaim St 94, Tel Aviv-Yafo, 6713311, Israel',
            latitude: '32.0690383',
            longitude: '34.7845191',
            type: 'restaurant',
            priceLevel: 2,
            reviewRating: 3.6,
            openingHours: null,
            about: 'best mcdonalds in the HaHashmonaim',
            picture: null,
            eventStart: '2020-07-25 09:00:00',
            eventEnd: '2020-07-25 12:00:00',
            tripID: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Event', null, {});
    }
};
