const GoogleApiClient = require("../clients/google_api_client");

class PlacesManager {
  constructor() {
    this.googleApiClient = new GoogleApiClient();
  }

  getPlacesByQuery = async (query) => {
    const places = await this.googleApiClient.getPlacesByQuery(query);
    return places;
  };

  getPlacesByLocation = async (location) => {
    const places = await this.googleApiClient.getPlacesByLocation(location);
    return places;
  };

  getPlaceDetails = async (placeId) => {
    const placeDetails = await this.googleApiClient.getPlaceDetails(placeId);
    return placeDetails;
  };
}

module.exports = PlacesManager;
