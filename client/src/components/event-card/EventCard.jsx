import React, { useState } from "react";
import apiService from "../../services/apiService";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import {
  Star as StarIcon,
  FiberNew as FiberNewIcon,
} from "@mui/icons-material";

function EventCard({ place, index, expandedId, setExpandedId }) {
  const [startDateTime, setStartDateTime] = useState("2022-08-08T16:00");
  const [endDateTime, setEndDateTime] = useState("2022-08-08T19:00");

  const handleExpandClick = (index) => {
    setExpandedId(expandedId === index ? -1 : index);
  };

  const handleStartDateTime = async (e) => setStartDateTime(e.target.value);
  const handleEndDateTime = async (e) => setEndDateTime(e.target.value);

  const handleSaveButtonClick = async () => {
    const event = {
      name: place.name,
      type: place.types[0], // TODO: not always 0, consider other methods for type
      address: place.formatted_address,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      reviewRating: place.rating,
      openingHours: null, // TODO: implement using Google Place Details API
      picture: null, // TODO: implement using Google Place Details API
      eventStart: startDateTime,
      eventEnd: endDateTime,
      tripID: 1, // TODO: add tripID support
    };

    if (endDateTime < startDateTime)
      alert("End Time could not be before Start Time");
    else await apiService.createEvent(event);
  };

  const renderRatingView = (rating) => {
    let ratingView = [];
    const roundRating = Math.round(rating);

    if (roundRating === 0) ratingView.push(<FiberNewIcon fontSize="small" />);
    else {
      for (let i = 0; i < roundRating; i++) {
        ratingView.push(<StarIcon fontSize="small" />);
      }
    }

    return ratingView;
  };

  return (
    <Card
      key={`place-${index}`}
      sx={{
        boxSizing: "border-box",
        margin: "5px",
        minWidth: 275,
        maxWidth: 425,
      }}
      variant="outlined"
    >
      <CardContent onClick={() => handleExpandClick(index)}>
        <Typography color="text.secondary" gutterBottom>
          {renderRatingView(place.rating)}
        </Typography>
        <Typography variant="h6" component="div">
          {place.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {place.formatted_address}
        </Typography>
      </CardContent>
      <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ display: "inline-block" }}>
            Schedule
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            sx={{
              display: "inline-block",
              position: "relative",
              float: "right",
            }}
          >
            <Button variant="text" onClick={() => handleExpandClick(index)}>
              Close
            </Button>
            <Button variant="contained" onClick={handleSaveButtonClick}>
              Save
            </Button>
          </Stack>
          <TextField
            id="datetime-local"
            label="Start"
            type="datetime-local"
            defaultValue={startDateTime}
            sx={{ width: 200, margin: "10px 0 10px 0" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleStartDateTime}
          />
          <TextField
            id="datetime-local"
            label="End"
            type="datetime-local"
            defaultValue={endDateTime}
            sx={{ width: 200, margin: "10px 0 10px 0" }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleEndDateTime}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
