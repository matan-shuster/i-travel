import React, { useState } from "react";

import styles from "./tripListContainerStyle.module.css";
import TripCard from "../trip/TripCard";
import AddNewTrip from "../add-new-trip/AddNewTrip";

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
        <div className={styles.headTitle}>Trips</div>
      </div>
      <div className={styles.tripList}>{trips}</div>

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
