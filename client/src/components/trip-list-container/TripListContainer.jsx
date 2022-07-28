import React, { useState } from "react";

import styles from "./tripListContainerStyle.module.css";
import TripCard from "../trip/TripCard";
import AddNewTrip from "../add-new-trip/AddNewTrip";

export default function TripListContainer({ data }) {
  const trips = data.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        location={trip.location}
        start_date={trip.start_date}
        end_date={trip.end_date}
        number_of_events={trip.number_of_events}
      />
    );
  });

  return (
    <div>
      <div className={styles.titleContainer}>
        <div className={styles.headTitle}>Trips</div>
      </div>
      <div className={styles.tripList}>{trips}</div>

      <div className={`${styles.addNewTrip} `}>
        <AddNewTrip />
      </div>
    </div>
  );
}
