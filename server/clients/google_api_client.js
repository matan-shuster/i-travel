const axios = require("axios");
require("dotenv").config();

class GoogleApiClient {
  constructor() {
    this.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  }

  async getPlaces(query) {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${this.GOOGLE_API_KEY}`
      );
      const places = response.data;

      return places;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch places from Google API");
    }
  }
}

module.exports = GoogleApiClient;
