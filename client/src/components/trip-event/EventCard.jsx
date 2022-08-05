import React from "react";
import styles from "./EventCardStyle.module.css";

import { DAYS, MONTHS, secendsToDays } from "../../constans";

import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material/";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";

function EventCard({
  name,
  latitude,
  longitude,
  distance,
  eventStart,
  eventEnd,
  address,
}) {
  function getDirectionInNewTav() {
    window.open(
      `https://www.google.com/maps/dir/${32.069},${32.069}/'32.0703,34.7846'/`,
      "_blank"
    );
  }

  const splitedStartYearMonthDay = eventStart.split("-");
  const splitedEndYearMonthDay = eventEnd.split("-");

  const splitedStartDayHour = splitedStartYearMonthDay[2].split("T");
  const splitedEndDayHour = splitedEndYearMonthDay[2].split("T");

  const splitedStartHour = splitedStartDayHour[1].split(":");
  const splitedEndHour = splitedEndDayHour[1].split(":");

  let splitedAdress = address.split(",");
  return (
    <div className={styles.eventItem}>
      <div className={styles.duration}>
        <div>
          <Typography
            sx={{ fontSize: 14, linHheight: "10px" }}
            color="text.secondary"
          >
            {splitedStartDayHour[0]}/{splitedStartYearMonthDay[1]}
          </Typography>
        </div>
        <div>
          {splitedStartHour[0]}:{splitedStartHour[1]}
        </div>

        <div>
          {splitedEndHour[0]}:{splitedEndHour[1]}
        </div>
      </div>

      <Card
        sx={{
          boxSizing: "border-box",
          margin: "5px",
          minWidth: 275,
          maxWidth: 425,
        }}
        variant="outlined"
      >
        <CardContent sx={{}}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
            {splitedAdress[0]} {splitedAdress[1]}
          </Typography>

          {/* <Typography
            sx={{ fontSize: 14, linHheight: "10px" }}
            color="text.secondary"
          >
            {distance} time to travel
          </Typography> */}
          <Button
            variant="contained"
            sx={{ marginLeft: "20px" }}
            onClick={() => getDirectionInNewTav()}
          >
            Get Directions &nbsp; <DirectionsIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default EventCard;
