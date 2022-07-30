import { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES_MAPPING } from "../nav-bar-component/consts";
import TripListContainer from "../trip-list-container/TripListContainer";
import TripEventsContainer from "../trip-events-container/TripEventsContainer";
import AddNewEvent from "../add-new-event/AddNewEvent";
import apiService from "../../services/apiService";
import DUMMY_TRIPS_DATA from "../../trips.json";

function AppContainer() {
  const [data, setData] = useState(null);
  const [trip, setTrip] = useState();

  useEffect(() => {
    async function callData() {
      const req = await apiService.getAllTripWithEvents(1);
      setData(req);
    }
    callData();
  }, []);

  const setTripCallback = useCallback((tripID) => {
    setTrip(tripID);
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path={ROUTES_MAPPING.TRIP_LIST_CONTAINER}
          element={
            <TripListContainer
              /* data={DUMMY_TRIPS_DATA} */
              onTripSelected={setTripCallback}
              data={data}
            />
          }
        />
        <Route
          path={ROUTES_MAPPING.TRIP_EVENTS}
          element={<TripEventsContainer data={data} tripID={trip} />}
        />
        {/* TODO: ADD EVENT PAGE COMPONENT */}
        {/* <Route path={ROUTES_MAPPING.EVENT} element={} /> */}
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
