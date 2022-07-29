import React, { useState } from "react";
import SearchBar from "../search-bar/SearchBar";
import EventCard from "../event-card/EventCard";
import placesJson from "../../places.json";

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
      {placesJson.results
        .filter(
          (result) =>
            (result.name.toLowerCase().includes(searchInput.toLowerCase()) ||
              searchInput === "") &&
            (result.types.includes(selectedCategory) ||
              selectedCategory === "all")
        )
        .map((result, index) => {
          return (
            <EventCard
              result={result}
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
