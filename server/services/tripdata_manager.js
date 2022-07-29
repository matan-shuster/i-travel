const eventManager = require('./event_manager');
const tripManager = require('./trip_manager');
const userManager = require('./user_manager');

 class TripdataManager {
    constructor() {
        this.eventManager = new eventManager();
        this.tripManager = new tripManager();
        this.userManager = new userManager();
    }
    async getTripList() {
        return await this.tripManager.getTripList();
    }
    createTrip(tripObject) {
        return this.tripManager.createTrip(tripObject);
    }
    updateTrip(tripObject) {
        return this.tripManager.updateTrip(tripObject);
    }
    deleteTrip(tripID) {
        return this.tripManager.deleteTrip(tripID);
    }
    getUserList() {
        return this.userManager.getUserList();
    }
    createUser(userObject) {
        return this.userManager.createUser(userObject);
    }
    updateUser(userObject) {
        return this.userManager.updateUser(userObject);
    }
    deleteUser(userID) {
        return this.userManager.deleteUser(userID);
    }
    async getEventList() {
        return await this.eventManager.getEventList();
    }
    createEvent(eventObject) {
        return this.eventManager.createEvent(eventObject);
    }
    updateEvent(eventObject) {
        return this.eventManager.updateEvent(eventObject);
    }
    deleteEvent(eventID) {
        return this.eventManager.deleteEvent(eventID);
    }

    async getTripsWithEvents() {
        const trips = await this.getTripList();
        const events = await this.getEventList();
        // const tripIds = trips.map((trip) => trip.id);
        // const eventsByTrip = events.filter((event) => tripIds.includes(event.tripID));
        // const tripsWithEvents = trips.map((trip) => {
        //     const eventsForTrip = eventsByTrip.filter((event) => event.tripID === trip.id);
        //     return {
        //         ...trip,
        //         events: eventsForTrip,
        //     };
        // });
        // console.log(tripsWithEvents);
        // return tripsWithEvents;

    }
}

module.exports = TripdataManager;