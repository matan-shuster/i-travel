import "./App.css";
import TripListContainer from "./components/trip-list-container/TripListContainer";
import TripEventsContainer from "./components/trip-events-container/TripEventsContainer";
import TRIPS_DUMMY_DATA from "./trips.json";
import EVENTS_DUMMY_DATA from "./events,.json";
function App() {
  return (
    <div className="App">
      <TripListContainer data={TRIPS_DUMMY_DATA} />
      {/* <TripEventsContainer data={EVENTS_DUMMY_DATA} /> */}
    </div>
  );
}

export default App;
