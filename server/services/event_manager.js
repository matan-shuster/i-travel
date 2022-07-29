const {Event} = require('../db/models');


class EventManager {
    constructor() {
        this.eventList = this.getEventList() || [];
    }

    async createEvent(eventObject) {
        const {
            dataValues: {id}
        } = await Event.create({
            ...eventObject
        });
        return {eventObject, id};
    }

    async getEventList() {
            const events = await Event.findAll({
                raw: true,
            });
        const eventArray= events.map(event => ({
            ...event,
        }));
        return eventArray;
    }

    async getEventsByTrip(tripID) {
        return Object.keys(this.eventList).filter(event => event.tripID === tripID);
    }

    async deleteEvent(eventId) {
        await Event.destroy({
            where: {eventId}
        });
    };

    async updateEvent(eventId, eventObject) {
        await Event.update({
            ...eventObject
        }, {
            where: {eventId}
        });
    }
}

module.exports = EventManager;