export default class apiService {
  //get all trips and events by User ID
  static async getAllTripWithEvents(userID) {
    const response = await fetch(`/users/${userID}/trips`);
    const tripsAndEvents = await response.json();
    return tripsAndEvents;
  }

  //add event
  static async createEvent(event) {
    const response = await fetch(`/events`, {
      method: "POST",
      body: JSON.stringify({ event }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newEvent = await response.json();
    return newEvent;
  }
  //update event
  static async updateEvent(event) {
    const response = await fetch(`/events/${event.id}`, {
      method: "PUT",
      body: JSON.stringify({ event }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedEvent = await response.json();
    return updatedEvent;
  }

  //delete event
  static async deleteEvent(eventID) {
    const response = await fetch(`/events/${eventID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedEvent = await response.json();
    return deletedEvent;
  }
  //add trip
  static async createTrip(trip) {
    const response = await fetch(`/trips`, {
      method: "POST",
      body: JSON.stringify({ trip }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newTrip = await response.json();
    return newTrip;
  }

  //update trip
  static async updateTrip(trip) {
    const response = await fetch(`/trips/${trip.id}`, {
      method: "PUT",
      body: JSON.stringify({ trip }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedTrip = await response.json();
    return updatedTrip;
  }
  //delete trip
  static async deleteTrip(tripID) {
    const response = await fetch(`/trips/${tripID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedTrip = await response.json();
    return deletedTrip;
  }

  //get all users
  static async getAllUsers() {
    const response = await fetch(`/users`);
    const users = await response.json();
    return users;
  }
  //add user
  static async createUser(user) {
    const response = await fetch(`/users`, {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newUser = await response.json();
    return newUser;
  }

  //update user
  static async updateUser(user) {
    const response = await fetch(`/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({ user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedUser = await response.json();
    return updatedUser;
  }

  //delete user
  static async deleteUser(userID) {
    const response = await fetch(`/users/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedUser = await response.json();
    return deletedUser;
  }

  //get places from google api by query
  static async getPlaces(query) {
    const response = await fetch(`/places/${query}`);
    const places = await response.json();
    return places;
  }

  static async getPlaceDetails(placeId) {
    const response = await fetch(`/place-details/${placeId}`);
    const places = await response.json();
    return places;
  }
}
