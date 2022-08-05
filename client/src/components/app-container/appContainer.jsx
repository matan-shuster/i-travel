import { useState, useEffect, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES_MAPPING } from "../nav-bar-component/consts";
import TripListContainer from "../trip-list-container/TripListContainer";
import TripEventsContainer from "../trip-events-container/TripEventsContainer";
import AddNewEvent from "../add-new-event/AddNewEvent";
import apiService from "../../services/apiService";
import DUMMY_TRIPS_DATA from "../../trips.json";
import LoginComponent from "../login-page/LoginComponent";

function AppContainer() {
  const [data, setData] = useState([]);
  const [trip, setTrip] = useState();
  const [userID, setUserID] = useState();

  useEffect(() => {
    async function callData() {
      const req = await apiService.getAllTripWithEvents(userID);
      setData(req);
    }
    callData();
  }, [userID]);

  const addNewTripCallback = useCallback(
    (newTrip) => {
      const updatedTrips = [...data, newTrip];
      setData(updatedTrips);
    },
    [data]
  );

  const setTripCallback = useCallback((tripID) => {
    setTrip(tripID);
  }, []);

  const setUserIDCallback = useCallback((userID) => {
    setUserID(userID);
  }, []);

  const setDataCallback = useCallback((newData) => {
    setData(newData);
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path={ROUTES_MAPPING.LOGIN}
          element={<LoginComponent setUserID={setUserIDCallback} />}
        />
        <Route
          path={ROUTES_MAPPING.TRIP_LIST_CONTAINER}
          element={
            <TripListContainer
              onNewTripPressed={addNewTripCallback}
              /* data={DUMMY_TRIPS_DATA} */
              onTripSelected={setTripCallback}
              data={data}
              userID={userID}
            />
          }
        />
        <Route
          path={ROUTES_MAPPING.TRIP_EVENTS}
          element={<TripEventsContainer data={data} tripID={trip} />}
        />
        {/* TODO: ADD EVENT PAGE COMPONENT */}
        {/* <Route path={ROUTES_MAPPING.EVENT} element={} /> */}
        <Route
          path={ROUTES_MAPPING.ADD_NEW_EVENT}
          element={<AddNewEvent data={data} setData={setDataCallback} />}
        />
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
