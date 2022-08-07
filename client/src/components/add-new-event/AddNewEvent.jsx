import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import SearchBar from "../search-bar/SearchBar";
import EventCard from "../event-card/EventCard";
import apiService from "../../services/apiService";
import NavBarComponent from "../nav-bar-component/NavBarComponent";
import styles from "./addNewEventStyle.module.css";
import spinningGlobe from "../../assets/spinningGlobe.png";

function AddNewEvent({ data, setData }) {
  const [expandedId, setExpandedId] = useState(-1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [places, setPlaces] = useState([]);
  const [tripName, setTripName] = useState("");
  const [tripLatCoordinate, setTripLatCoordinate] = useState(0.0);
  const [tripLngCoordinate, setTripLngCoordinate] = useState(0.0);
  const [loading, setLoading] = useState(true);
  const [tripEndDate, setTripEndDate] = useState();
  const [tripStartDate, setTripStartDate] = useState();
  const tripId = window.location.pathname?.split("/")[2];

  const isSearchInputEmpty = searchInput === "";
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      if (data.length > 0) {
        const tripData = data.filter((item) => item.id.toString() === tripId);
        if (tripData.length > 0) {
          setTripName(tripData[0].name.slice(8));
          const tripLocationData = await apiService.getPlacesByQuery(
            tripData[0].name.slice(8)
          );

          setTripLatCoordinate(
            tripLocationData.results[0].geometry.location.lat
          );
          setTripLngCoordinate(
            tripLocationData.results[0].geometry.location.lng
          );
          const placesList = await apiService.getPlacesByLocation(
            `${tripLocationData.results[0].geometry.location.lat},${tripLocationData.results[0].geometry.location.lng}`
          );
          setPlaces(placesList.results);
        }
        setTripEndDate(new Date(tripData[0].endDate));
        setTripStartDate(new Date(tripData[0].startDate));
      }
    };

    fetchData().catch(console.error);
  }, [isSearchInputEmpty, data, tripId]);

  const handleSearchInputChange = async (e) => {
    setSearchInput(e.target.value);
    setExpandedId(-1);
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (searchInput === "") {
      setPlaces([]);
    } else {
      const placesList = await apiService.getPlacesByQuery(
        searchInput,
        `${tripLatCoordinate},${tripLngCoordinate}`
      );
      setPlaces(placesList.results);
    }
  };

  const handleSearchClear = () => {
    setSearchInput("");
    setSelectedCategory("all");
    setExpandedId(-1);
    setPlaces([]);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setExpandedId(-1);
  };

  const filteredPlaces = places.filter(
    (place) =>
      place.types.includes(selectedCategory) || selectedCategory === "all"
  );
  return (
    <div style={{ textAlign: "left" }}>
      <NavBarComponent
        currentPage="addNewEvent"
        tripId={tripId}
        tripName={tripName}
      />
      <SearchBar
        searchInput={searchInput}
        selectedCategory={selectedCategory}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchClick={handleSearchClick}
        handleSearchClear={handleSearchClear}
        handleCategoryChange={handleCategoryChange}
        key={1}
      />
      <div className={styles.placesList}>
        {(Array.isArray(filteredPlaces) && filteredPlaces.length) || loading ? (
          filteredPlaces.map((place, index) => {
            return (
              <EventCard
                key={`event-${index}`}
                place={place}
                index={index}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
                tripId={tripId}
                data={data}
                setData={setData}
                loading={loading}
                setLoading={setLoading}
                tripStartDate={tripStartDate}
                tripEndDate={tripEndDate}
              />
            );
          })
        ) : (
          <Card
            elevation={0}
            sx={{
              maxWidth: 425,
              textAlign: "center",
              backgroundColor: "#F6F7FB",
            }}
          >
            <CardMedia
              component="img"
              height="350"
              image={spinningGlobe}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                No Results Found
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Maybe try a different keyword?
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default AddNewEvent;
