import React from "react";
import styles from "./EventCardStyle.module.css";

import { DAYS, MONTHS, secendsToDays } from "../../constans";

import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function EventCard({
  name,
  latitude,
  longitude,
  distance,
  eventStart,
  eventEnd,
  address,
}) {
  let splitedStartHour = eventStart.split("-");
  let splitedEndHour = eventEnd.split("-");

  splitedStartHour = splitedStartHour[2].split("T");
  splitedEndHour = splitedEndHour[2].split("T");

  splitedStartHour = splitedStartHour[1].split(":");
  splitedEndHour = splitedEndHour[1].split(":");

  let splitedAdress = address.split(",");
  return (
    <div className={styles.eventItem}>
      <div className={styles.duration}>
        <div>
          {splitedStartHour[0]}:{splitedStartHour[1]}
        </div>
        {/* <div>
          <Avatar
            sx={{
              bgcolor: "green",
              fontSize: "10px",
              width: 50,
              height: 50,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>EVENT DURATION</div>
          </Avatar>
        </div> */}
        <div>
          {splitedEndHour[0]}:{splitedEndHour[1]}
        </div>
      </div>

      <Card
        sx={{
          minWidth: 275,
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: 12 }}
            >
              {splitedAdress[0]} {splitedAdress[1]}
            </Typography>
            <Typography
              sx={{ fontSize: 14, linHheight: "10px" }}
              color="text.secondary"
            >
              {distance} time to travel
            </Typography>
            <Typography
              sx={{ fontSize: 14, linHheight: "10px" }}
              color="text.secondary"
            >
              NAV_BUTTON
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default EventCard;
