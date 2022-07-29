const {Trip} = require('../db/models');

class TripManager {
    constructor() {
        this.tripList = this.getTripList() || [];
    }

    async createTrip(tripObject) {
        const {
            dataValues: {id}
        } = await Trip.create({
            ...tripObject
        });
        this.tripList.push({...tripObject, id});
        return {tripObject, id};
    }

    async getTripList() {
        return (await Trip.findAll()).map((element) =>
            element.get({plain: true})
        );
    }

    async getTripByID(tripID) {
        return this.tripList.find(trip => trip.id === tripID);
    }

    async deleteTrip(tripID) {
        await Trip.destroy({
            where: {id: tripID}
        });
    }

    async updateTrip(tripID, tripObject) {
        await Trip.update({
            ...tripObject
        }, {
            where: {id: tripID}
        });
    }
}

module.exports = TripManager;