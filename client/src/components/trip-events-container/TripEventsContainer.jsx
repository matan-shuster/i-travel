import React, { useState } from "react";

import styles from "./tripEventsContainerStyle.module.css";

import EventCard from "../trip-event/EventCard";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function TripEventsContainer({ data }) {
  const events = data.map((event) => {
    return (
      <EventCard
        key={event.eventID}
        name={event.name}
        location={event.location}
        distance={event.distance}
        startHour={event.start_Hour}
        endHour={event.end_Hour}
      />
    );
  });

  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.headTitle}>NAME_OF_TRIP</div>
      </div>
      <div className={styles.eventList}>{events}</div>

      <div className={`${styles.addNewEvent} `}>
        <Fab sx={{ bgcolor: "red", color: "white" }} aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}
