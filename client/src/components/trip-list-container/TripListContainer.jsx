import React, { useState, useCallback } from "react";

import styles from "./tripListContainerStyle.module.css";
import TripCard from "../trip/TripCard";
import AddNewTrip from "../add-new-trip/AddNewTrip";

import NavBarComponent from "../nav-bar-component/NavBarComponent";
import EmptyTripList from "../empty-trip-list/EmptyTripList";

export default function TripListContainer({
  data,
  onTripSelected,
  onNewTripPressed,
  userID,
}) {
  const [displayBtn, setDisplayBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [tripDestination, setTripDestination] = useState("");

  const setDisplayBtnOn = useCallback(() => {
    setDisplayBtn(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setDisplayBtn(false);
  };

  const handleClickClose = () => {
    setOpen(false);
    setDisplayBtn(true);
  };

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
      <NavBarComponent currentPage="tripListContainer" />
      {trips.length > 0 ? (
        <div className={styles.tripList}>{trips}</div>
      ) : (
        <EmptyTripList
          itemData={itemData}
          handleClickOpen={handleClickOpen}
          setTripDestination={setTripDestination}
        />
      )}
      <div className={`${styles.addNewTrip} `}>
        <AddNewTrip
          onNewTripPressed={onNewTripPressed}
          userID={userID}
          newTripId={data?.length}
          handleClickOpen={handleClickOpen}
          displayBtn={displayBtn}
          open={open}
          handleClickClose={handleClickClose}
          setDisplayBtnOn={setDisplayBtnOn}
          tripDestination={tripDestination}
        />
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__340.jpg",
    title: "Paris",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/06/22/11/54/manhattan-2430572_960_720.jpg",
    title: "New York",
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/04/20/11/39/japan-4141578_960_720.jpg",
    title: "Tokyo",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/02/02/18/33/sphinx-1175828_960_720.jpg",
    title: "Cairo",
  },
  {
    img: "https://cdn.pixabay.com/photo/2019/10/31/18/56/jerusalem-4592574_960_720.jpg",
    title: "Jerusalem",
  },
  {
    img: "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
    title: "London",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/05/28/23/28/rio-2352566_960_720.jpg",
    title: "Rio de Janeiro",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/03/27/00/01/australia-1281935_960_720.jpg",
    title: "Sydney",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/07/20/14/02/rome-3550739_960_720.jpg",
    title: "Rome",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/11/06/14/12/roof-1028250_960_720.jpg",
    title: "Beijing",
  },
];
