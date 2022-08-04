import React, { useState } from "react";
import styles from "./tripEventsContainerStyle.module.css";
import EventCard from "../trip-event/EventCard";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import globeWithMarkers from "../../assets/globeWithMarkers.png";

export default function TripEventsContainer({ data, tripID = 0 }) {
  let navigate = useNavigate();
  const trip = data.filter((trip) => {
    if (trip.id === tripID) return trip;
  });
  const events = trip[0].events.map((event) => {
    return (
      <EventCard
        key={event.id}
        name={event.name}
        latitude={event.latitude}
        longitude={event.latitude}
        location={event.location}
        distance={event.distance}
        eventStart={event.eventStart}
        eventEnd={event.eventEnd}
        address={event.address}
      />
    );
  });
  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.headTitle}>{trip[0].name}</div>
      </div>
      {events.length > 0 ? (
        <div className={styles.eventList}>{events}</div>
      ) : (
        <div>
          <img
            alt="emptyEventsList"
            src={globeWithMarkers}
            style={{ width: "100%", height: "350px" }}
          ></img>
        </div>
      )}

      <div className={`${styles.addNewEvent} `}>
        <Fab
          sx={{ bgcolor: "darkblue", color: "white" }}
          aria-label="add"
          onClick={() => {
            navigate(`/trip/${tripID}/add_new_event`);
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
