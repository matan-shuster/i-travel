"use strict";

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
    await queryInterface.bulkInsert("Trips", [
      {
        name: "Trip to Tel Aviv",
        startDate: "2022-07-25",
        endDate: "2022-07-25",
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trip to Paris",
        startDate: "2022-07-27",
        endDate: "2022-07-27",
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trip to London",
        startDate: "2022-07-29",
        endDate: "2022-07-31",
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     *
     */
    await queryInterface.bulkDelete("Trips", null, {});
  },
};
