import React, { useState } from "react";

import styles from "./tripListContainerStyle.module.css";
import TripCard from "../trip/TripCard";
import AddNewTrip from "../add-new-trip/AddNewTrip";

import emptyListImg from "../../assets/emptyListImg.png";
import LinearProgress from "@mui/material/LinearProgress";

export default function TripListContainer({
  data,
  onTripSelected,
  onNewTripPressed,
  userID,
}) {
  let trips = data
    ? data.map((trip) => {
        return (
          <TripCard
            key={trip.id}
            id={trip.id}
            name={trip.name}
            startDate={trip.startDate}
            endDate={trip.endDate}
            number_of_events={trip.events.length}
            onTripSelected={onTripSelected}
          />
        );
      })
    : "loading...";

  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.headTitle}>
          {trips.length > 0 ? "My Trips" : null}
        </div>
      </div>
      {trips.length > 0 ? (
        <div className={styles.tripList}>{trips}</div>
      ) : (
        <div>
          <img
            alt="emptyListPic"
            src={emptyListImg}
            style={{ width: "100%", height: "500px" }}
          ></img>
        </div>
      )}
      <div className={`${styles.addNewTrip} `}>
        <AddNewTrip
          onNewTripPressed={onNewTripPressed}
          userID={userID}
          newTripId={data?.length}
        />
      </div>
    </div>
  );
}
