const { Event } = require("../db/models");

class EventManager {
  async createEvent(eventObject) {
    const {
      dataValues: { id },
    } = await Event.create({
      ...eventObject,
    });
    return { eventObject, id };
  }

  async getEventList() {
    const events = await Event.findAll({
      raw: true,
    });
    return events.map((event) => ({
      ...event,
    }));
  }

  async deleteEvent(eventId) {
    await Event.destroy({
      where: { eventId },
    });
  }

  async updateEvent(eventId, eventObject) {
    await Event.update(
      {
        ...eventObject,
      },
      {
        where: { eventId },
      }
    );
  }
}

module.exports = EventManager;
