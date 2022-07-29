export const ROUTES_MAPPING = {
  TRIP_LIST_CONTAINER: "/",
  TRIP_EVENTS: "trip",
  ADD_NEW_EVENT: "add_event",
};

export const ROUTES = [
  { name: "TripList", route: ROUTES_MAPPING.TRIP_LIST_CONTAINER, key: 1 },
  { name: "TripEvents", route: ROUTES_MAPPING.TRIP_EVENTS, key: 2 },
  { name: "AddNewEvent", route: ROUTES_MAPPING.ADD_NEW_EVENT, key: 3 },
];
