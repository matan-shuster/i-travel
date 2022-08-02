import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/apiService";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import {
  Star as StarIcon,
  FiberNew as FiberNewIcon,
} from "@mui/icons-material";

function EventCard({
  place,
  index,
  expandedId,
  setExpandedId,
  tripId,
  data,
  setData,
}) {
  const [startDateTime, setStartDateTime] = useState("2022-08-08T16:00");
  const [endDateTime, setEndDateTime] = useState("2022-08-08T19:00");
  const [photoReference, setPhotoReference] = useState("");
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPhotoReference(place.photos ? place.photos[0]?.photo_reference : "");

    const fetchData = async () => {
      const placeDetails = await apiService.getPlaceDetails(place.place_id);

      const eventJson = {
        name: placeDetails.result.name,
        type: placeDetails.result.types[0], // TODO: not always 0, consider other methods for type
        address: placeDetails.result.formatted_address,
        latitude: placeDetails.result.geometry.location.lat,
        longitude: placeDetails.result.geometry.location.lng,
        reviewRating: placeDetails.result.rating,
        openingHours: placeDetails.result.opening_hours,
        picture: {
          uri: `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=400&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        },
        tripID: tripId,
      };

      setEvent(eventJson);
    };

    fetchData().catch(console.error);
  }, [photoReference, place, tripId]);

  const handleExpandClick = (index) => {
    setExpandedId(expandedId === index ? -1 : index);
  };

  const handleStartDateTime = async (e) => setStartDateTime(e.target.value);
  const handleEndDateTime = async (e) => setEndDateTime(e.target.value);

  const handleSaveButtonClick = async () => {
    const eventWithDateTimes = {
      ...event,
      eventStart: startDateTime,
      eventEnd: endDateTime,
    };
    if (endDateTime < startDateTime)
      alert("End Time could not be before Start Time");
    else await apiService.createEvent(eventWithDateTimes);

    setData(
      data.forEach((item) => {
        if (item.id.toString() === tripId) item.events.push(eventWithDateTimes);
      })
    );

    navigate(`/trip/${tripId}`);
  };

  const renderRatingView = (rating) => {
    let ratingView = [];
    const roundRating = Math.round(rating);

    if (roundRating === 0)
      ratingView.push(<FiberNewIcon fontSize="small" key="fiber-new" />);
    else {
      for (let i = 0; i < roundRating; i++) {
        ratingView.push(<StarIcon fontSize="small" key={`star-${i}`} />);
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
      <Box
        component="img"
        sx={{
          display: "block",
          marginLeft: "26px",
          width: "350px",
          objectFit: "none",
          height: "350px",
        }}
        src={`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=450&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
      />
      <CardContent onClick={() => handleExpandClick(index)}>
        <Typography color="text.secondary" gutterBottom>
          {renderRatingView(event.reviewRating)}
        </Typography>
        <Typography variant="h6" component="div">
          {event.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {event.address}
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
