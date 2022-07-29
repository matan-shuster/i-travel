import { Route, Routes } from "react-router-dom";
import { ROUTES_MAPPING } from "../nav-bar-component/consts";
import TripListContainer from "../trip-list-container/TripListContainer";
import TripEvents from "../trip-events/TripEvents";
import AddNewEvent from "../add-new-event/AddNewEvent";
import DUMMY_TRIPS_DATA from "../../trips.json";

function AppContainer() {
  return (
    <div>
      <Routes>
        <Route
          path={ROUTES_MAPPING.TRIP_LIST_CONTAINER}
          element={<TripListContainer data={DUMMY_TRIPS_DATA} />}
        />
        <Route path={ROUTES_MAPPING.TRIP_EVENTS} element={<TripEvents />} />
        <Route path={ROUTES_MAPPING.ADD_NEW_EVENT} element={<AddNewEvent />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default AppContainer;
