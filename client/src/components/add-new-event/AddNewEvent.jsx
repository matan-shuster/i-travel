import React, { useEffect, useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import EventCard from "../event-card/EventCard";
import apiService from "../../services/apiService";

function AddNewEvent({ data }) {
  const [expandedId, setExpandedId] = useState(-1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [places, setPlaces] = useState([]);
  const tripId = window.location.pathname.split("/")[2];

  const isSearchInputEmpty = searchInput === "";
  useEffect(() => {
    const fetchData = async () => {
      if (data.length > 0) {
        const tripData = await data.filter(
          (item) => item.id.toString() === tripId
        );
        const tripLocationData = await apiService.getPlacesByQuery(
          tripData[0].name.slice(8)
        );
        const placesList = await apiService.getPlacesByLocation(
          `${tripLocationData.results[0].geometry.location.lat},${tripLocationData.results[0].geometry.location.lng}`
        );
        setPlaces(placesList.results);
      }
    };

    fetchData().catch(console.error);
  }, [isSearchInputEmpty, data, tripId]);

  const handleSearchInputChange = async (e) => {
    setSearchInput(e.target.value);
    setExpandedId(-1);
  };

  const handleSearchClick = async () => {
    if (searchInput === "") {
      setPlaces([]);
    } else {
      const placesList = await apiService.getPlacesByQuery(searchInput);
      setPlaces(placesList.results);
    }
  };

  const handleSearchClear = () => {
    setSearchInput("");
    setExpandedId(-1);
    setPlaces([]);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setExpandedId(-1);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <SearchBar
        searchInput={searchInput}
        selectedCategory={selectedCategory}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchClick={handleSearchClick}
        handleSearchClear={handleSearchClear}
        handleCategoryChange={handleCategoryChange}
        key={1}
      />
      {Array.isArray(places) && places.length
        ? places
            .filter(
              (place) =>
                place.types.includes(selectedCategory) ||
                selectedCategory === "all"
            )
            .map((place, index) => {
              return (
                <EventCard
                  key={`event-${index}`}
                  place={place}
                  index={index}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                  tripId={tripId}
                />
              );
            })
        : ""}
    </div>
  );
}

export default AddNewEvent;
