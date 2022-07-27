import "./App.css";
import TripListContainer from "./components/trip-list-container/TripListContainer";
import DUMMY_DATA from "./trips.json";
function App() {
  return (
    <div className="App">
      <TripListContainer data={DUMMY_DATA} />
    </div>
  );
}

export default App;
