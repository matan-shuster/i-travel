const GoogleApiClient = require("../clients/google_api_client");

class PlacesManager {
  constructor() {
    this.googleApiClient = new GoogleApiClient();
  }

  getPlaces = async (query) => {
    const places = await this.googleApiClient.getPlaces(query);
    return places;
  };

  getPlaceDetails = async (placeId) => {
    const placeDetails = await this.googleApiClient.getPlaceDetails(placeId);
    return placeDetails;
  };
}

module.exports = PlacesManager;
