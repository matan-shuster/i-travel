export const ROUTES_MAPPING = {
  TRIP_LIST_CONTAINER: "/",
  TRIP_EVENTS: "/trip/:id",
  EVENT: "/trip/:id/event/:id",
  ADD_NEW_EVENT: "/trip/:id/add_new_event",
};

export const ROUTES = [
  { name: "TripList", route: ROUTES_MAPPING.TRIP_LIST_CONTAINER, key: 1 },
  { name: "TripEvents", route: ROUTES_MAPPING.TRIP_EVENTS, key: 2 },
  { name: "Event", route: ROUTES_MAPPING.EVENT, key: 3 },
  { name: "AddNewEvent", route: ROUTES_MAPPING.ADD_NEW_EVENT, key: 4 },
];
