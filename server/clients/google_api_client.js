const axios = require("axios");
require("dotenv").config();

class GoogleApiClient {
  constructor() {
    this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  }

  async getPlacesByQuery(query) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&language=en&key=${this.GOOGLE_API_KEY}`
      );
      const places = response.data;

      return places;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch places from Google API");
    }
  }

  async getPlacesByLocation(location) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1500&language=en&key=${this.GOOGLE_API_KEY}`
      );
      const places = response.data;

      return places;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch places from Google API");
    }
  }

  async getPlaceDetails(placeId) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&language=en&key=${this.GOOGLE_API_KEY}`
      );
      const placeDetails = response.data;

      return placeDetails;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch place details from Google API");
    }
  }
}

module.exports = GoogleApiClient;
