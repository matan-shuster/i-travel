import React from "react";
import styles from "./tripCardStyle.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { DAYS, MONTHS, secendsToDays } from "../../constans";
function TripCard({ location, start_date, end_date, number_of_events }) {
  const splicedStartDate = start_date.split("-");
  const splicedEndDate = end_date.split("-");

  const tripDate = new Date(
    `${splicedStartDate[0]},${splicedStartDate[1]}, ${splicedStartDate[2]}`
  );
  const tripDay = DAYS[tripDate.getDay()];
  const tripMonthAndDayOfMonth = `${splicedStartDate[1]} ${
    MONTHS[parseInt(splicedStartDate[0]) - 1]
  }`;
  const daysLeft = Math.ceil(secendsToDays(tripDate - new Date()));

  return (
    <div className={styles.tripBox} onClick={() => console.log("open")}>
      <div className={styles.circle}>
        <div className={styles.circleText}>
          <div>{tripDay}</div>
          <div>{tripMonthAndDayOfMonth}</div>
        </div>
      </div>
      <div className={styles.tripInfo}>
        <div className={styles.tripTitleText}>Trip to {location}</div>
        <div className={styles.timeLeftText}>
          <div>
            <AiOutlineClockCircle />
          </div>
          <div>In {daysLeft} days </div>
        </div>
        <div className={styles.numberOfEventsText}>
          {number_of_events} events
        </div>
      </div>
    </div>
  );
}

export default TripCard;
