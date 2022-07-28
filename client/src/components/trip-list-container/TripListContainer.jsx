import React, { useState } from "react";
import { BsPlusLg, BsFillCheckSquareFill } from "react-icons/bs";

import styles from "./tripListContainerStyle.module.css";
import TripCard from "../trip/TripCard";

export default function TripListContainer({ data }) {
  const [displayInputs, setDisplayInput] = useState(false);
  const [newTripLocation, setNewTripLocation] = useState();
  const [newStartDate, setNewStartDate] = useState();
  const [newEndtDate, setNewEndDate] = useState();

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

      <div
        className={`${styles.bottomIcon} ${
          displayInputs ? styles.displayNone : null
        }`}
      >
        <BsPlusLg onClick={() => setDisplayInput(true)} />
      </div>
      <div className={displayInputs ? styles.something : styles.displayNone}>
        <input type="text" placeholder="where" />
        <input type="date" />
        <input type="date" />
        <div className={styles.doneIcon}>
          <BsFillCheckSquareFill onClick={() => setDisplayInput(false)} />
        </div>
      </div>
    </div>
  );
}
