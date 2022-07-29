import "./App.css";
import TripListContainer from "./components/trip-list-container/TripListContainer";
import apiService from "./services/apiService";
import DUMMY_DATA from "./trips.json";
import {useEffect, useState} from "react";
function App() {
    const [trips, setTrips] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventsByTrip, setEventsByTrip] = useState([]);
    async function fetchData() {
        const tripsData = await apiService.getAllTrips();
        const eventsData = await apiService.getAllEvents();
        const eventsByTrip = await apiService.getEventsByTrip(1);
        setTrips(tripsData);
        setEvents(eventsData);
        setEventsByTrip(eventsByTrip);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log('@@@: ', trips)
    console.log('all events: ', events)
    console.log('@: ', eventsByTrip)
    return (
    <div className="App">
      <TripListContainer data={DUMMY_DATA} />
    </div>
  );
}

export default App;
