import React, { useState } from "react";
import styles from "./tripEventsContainerStyle.module.css";
import EventCard from "../trip-event/EventCard";

import { Fab, Card, CardContent, CardMedia, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import globeWithMarkers from "../../assets/globeWithMarkers.png";
import NavBarComponent from "../nav-bar-component/NavBarComponent";

export default function TripEventsContainer({ data, tripID }) {
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
        longitude={event.longitude}
        location={event.location}
        distance={event.distance}
        eventStart={event.eventStart}
        eventEnd={event.eventEnd}
        address={event.address}
        tripName={trip[0].name}
      />
    );
  });
  return (
    <div>
      <NavBarComponent
        currentPage="tripEventsConatiner"
        tripName={trip[0].name.slice(8)}
      />
      {events.length > 0 ? (
        <div className={styles.eventList}>{events}</div>
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
            image={globeWithMarkers}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              You've not added any events yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Would you like to add one now?
            </Typography>
          </CardContent>
        </Card>
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
