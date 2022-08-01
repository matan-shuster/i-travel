import React from "react";
import styles from "./tripCardStyle.module.css";

import { secendsToDays } from "../../constans";

import { Avatar } from "@mui/material";
import { Box } from "@mui/material";
import { Card, CardContent, CardActionArea, CardActions } from "@mui/material";
import { Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useNavigate } from "react-router-dom";

function TripCard({ id, name, startDate, number_of_events, onTripSelected }) {
  const tripDate = new Date(startDate);
  const splitDate = String(tripDate).split(" ");
  const tripDay = splitDate[0];
  const tripMonthAndDayOfMonth = `${splitDate[1]} ${splitDate[2]}`;
  const daysLeft = Math.ceil(secendsToDays(tripDate - new Date()));
  let daysLeftMessage = `in ${daysLeft} days`;
  if (daysLeft === 0) {
    daysLeftMessage = "Today!";
  }
  if (daysLeft < 0) {
    daysLeftMessage = `${Math.abs(daysLeft)} days ago!`;
  }

  let navigate = useNavigate();

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
          onClick={() => {
            onTripSelected(id);
            navigate(`/trip/${id}`);
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon
                fontSize="small"
                sx={{ color: "gray", paddingBottom: "8px" }}
              />
              <Typography color="text.secondary" gutterBottom>
                {daysLeftMessage}
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
