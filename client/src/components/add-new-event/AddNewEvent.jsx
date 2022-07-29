import React, { useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import EventCard from "../event-card/EventCard";
import DUMMY_PLACES_DATA from "../../places.json";

function AddNewEvent() {
  const [expandedId, setExpandedId] = useState(-1);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div style={{ textAlign: "left" }}>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setExpandedId={setExpandedId}
      />
      {DUMMY_PLACES_DATA.results
        .filter(
          (place) =>
            (place.name.toLowerCase().includes(searchInput.toLowerCase()) ||
              searchInput === "") &&
            (place.types.includes(selectedCategory) ||
              selectedCategory === "all")
        )
        .map((place, index) => {
          return (
            <EventCard
              place={place}
              index={index}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          );
        })}
    </div>
  );
}

export default AddNewEvent;
