import React from "react";
import styles from "./tripCardStyle.module.css";

import { DAYS, MONTHS, secendsToDays } from "../../constans";

import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function TripCard({ location, start_date, end_date, number_of_events }) {
  const splicedStartDate = start_date.split("-");

  const tripDate = new Date(
    `${splicedStartDate[0]},${splicedStartDate[1]}, ${splicedStartDate[2]}`
  );
  const tripDay = DAYS[tripDate.getDay()];
  const tripMonthAndDayOfMonth = `${splicedStartDate[1]} ${
    MONTHS[parseInt(splicedStartDate[0]) - 1]
  }`;
  const daysLeft = Math.ceil(secendsToDays(tripDate - new Date()));

  return (
    <div className={styles.tripItem}>
      <div className={styles.avatar}>
        <Avatar
          sx={{
            bgcolor: "black",
            fontSize: "10px",
            width: 50,
            height: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          <div>{tripDay}</div> <div>{tripMonthAndDayOfMonth}</div>
        </Avatar>
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
              {location}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon
                fontSize="small"
                sx={{ color: "gray", paddingBottom: "8px" }}
              />
              <Typography color="text.secondary" gutterBottom>
                In {daysLeft} days
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: 14, linHheight: "10px" }}
              color="text.secondary"
            >
              {number_of_events} events
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default TripCard;
