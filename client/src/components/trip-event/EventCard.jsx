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
  location,
  cordinates,
  distance,
  startHour,
  endHour,
}) {
  const start = startHour.split(" ");
  const end = endHour.split(" ");

  return (
    <div className={styles.eventItem}>
      <div className={styles.duration}>
        <div>{start[0]}</div>
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
        <div>{end[0]} </div>
      </div>

      <Card
        sx={{
          minWidth: 275,
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
              {location}
            </Typography>
            <Typography
              sx={{ fontSize: 14, linHheight: "10px" }}
              color="text.secondary"
            >
              {distance}
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
