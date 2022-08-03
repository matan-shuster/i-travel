const { Trip } = require("../db/models");

class TripManager {
  async createTrip(tripObject) {
    const {
      dataValues: { id },
    } = await Trip.create({
      ...tripObject,
    });
    return { tripObject, id };
  }

  async getTripList() {
    return (await Trip.findAll()).map((element) =>
      element.get({ plain: true })
    );
  }

  async getUserTripList(userID) {
    return (
      await Trip.findAll({
        where: { userID },
      })
    ).map((element) => element.get({ plain: true }));
  }
  async deleteTrip(tripID) {
    await Trip.destroy({
      where: { id: tripID },
    });
  }

  async updateTrip(tripID, tripObject) {
    await Trip.update(
      {
        ...tripObject,
      },
      {
        where: { id: tripID },
      }
    );
  }
}

module.exports = TripManager;
