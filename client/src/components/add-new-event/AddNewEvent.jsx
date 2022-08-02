import React, { useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import EventCard from "../event-card/EventCard";
import apiService from "../../services/apiService";

function AddNewEvent() {
  const [expandedId, setExpandedId] = useState(-1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [places, setPlaces] = useState([]);

  const handleSearchInputChange = async (e) => {
    setSearchInput(e.target.value);
    setExpandedId(-1);
  };

  const handleSearchClick = async () => {
    if (searchInput === "") {
      setPlaces([]);
    } else {
      const placesList = await apiService.getPlaces(searchInput);
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
                  place={place}
                  index={index}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId}
                  key={`event-${index}`}
                />
              );
            })
        : ""}
    </div>
  );
}

export default AddNewEvent;
