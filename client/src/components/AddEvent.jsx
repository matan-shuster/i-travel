import React, { useState } from "react";
import SearchBar from "./SearchBar";
import EventCard from "./EventCard";
import json from "./json.json";

function AddEvent() {
  const [expandedId, setExpandedId] = useState(-1);

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setExpandedId={setExpandedId}
      />
      {json.results
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

export default AddEvent;
