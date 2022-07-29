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
        this.eventList.push({...eventObject, id});
        return {eventObject, id};
    }

    async getEventList() {
        return (await Event.findAll()).map((element) =>
            element.get({plain: true})
        );
    }

    async getEventsByTrip(tripID) {
        return this.eventList.filter(event => event.tripID === tripID);
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