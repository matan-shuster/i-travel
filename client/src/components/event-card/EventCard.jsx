import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/apiService";
import {
  Card,
  CardMedia,
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
  StarOutline as StarOutlineIcon,
} from "@mui/icons-material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function EventCard({
  place,
  index,
  expandedId,
  setExpandedId,
  tripId,
  data,
  setData,
}) {
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [photoReference, setPhotoReference] = useState("");
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setPhotoReference(place.photos ? place.photos[0]?.photo_reference : "");

    const fetchData = async () => {
      const placeDetails = await apiService.getPlaceDetails(place.place_id);

      const eventJson = {
        name: placeDetails.result.name,
        type: placeDetails.result.types[0],
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

  useEffect(() => {
    const trip = data.find((trip) => trip.id.toString() === tripId);

    const currentTime = new Date();
    const tripStartDate = new Date(trip.startDate);
    tripStartDate.setHours(currentTime.getHours());
    tripStartDate.setMinutes(currentTime.getMinutes());

    setStartDateTime(tripStartDate.toISOString());
    setEndDateTime(tripStartDate.toISOString());
  }, []);

  const handleExpandClick = (index) => {
    setExpandedId(expandedId === index ? -1 : index);
  };

  const handleSaveButtonClick = async () => {
    const eventWithDateTimes = {
      ...event,
      eventStart: startDateTime.toString(),
      eventEnd: endDateTime.toString(),
    };
    if (endDateTime < startDateTime)
      alert("End Time could not be before Start Time");
    else await apiService.createEvent(eventWithDateTimes);

    const newData = [...data];
    newData.forEach((item) => {
      if (item.id.toString() === tripId) {
        item.events.push(eventWithDateTimes);
      }
      setData(newData);
    });
    navigate(`/trip/${tripId}`);
  };

  const renderRatingView = (rating) => {
    let ratingView = [];
    const roundRating = Math.round(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= roundRating) {
        ratingView.push(<StarIcon fontSize="small" key={`star-${i}`} />);
      } else {
        ratingView.push(<StarOutlineIcon fontSize="small" key={`star-${i}`} />);
      }
    }

    return ratingView;
  };

  return (
    <Card
      key={`place-${index}`}
      sx={{
        boxSizing: "border-box",
        margin: "10px 5px 10px 5px",
        minWidth: 275,
        maxWidth: 425,
      }}
      variant="outlined"
    >
      <Box
        onClick={() => handleExpandClick(index)}
        sx={{ position: "relative" }}
      >
        <CardMedia
          component="img"
          height="250"
          image={`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=450&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        />
        {event.reviewRating !== undefined ? (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100px",
              height: "20px",
              bgcolor: "rgba(0, 0, 0, 0.54)",
              color: "white",
              padding: "2px",
              borderRadius: "0 0 4px 0",
            }}
          >
            <Typography color="gold" gutterBottom>
              {renderRatingView(event.reviewRating)}
            </Typography>
          </Box>
        ) : (
          ""
        )}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "95%",
            bgcolor: "rgba(0, 0, 0, 0.54)",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography variant="h6">{event.name}</Typography>
          <Typography variant="body2">{event.address}</Typography>
        </Box>
      </Box>
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
          <Stack spacing={1}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div style={{ marginTop: "10px" }}>
                <DateTimePicker
                  label="Start Time"
                  renderInput={(params) => <TextField {...params} />}
                  value={new Date(startDateTime)}
                  inputFormat="dd/MM/yyyy HH:mm"
                  ampm={false}
                  ampmInClock={false}
                  onChange={(newValue) => {
                    setStartDateTime(newValue.toISOString());
                    setEndDateTime(newValue.toISOString());
                  }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <DateTimePicker
                  label="End Time"
                  renderInput={(params) => <TextField {...params} />}
                  value={new Date(endDateTime)}
                  minDate={new Date(startDateTime)}
                  inputFormat="dd/MM/yyyy HH:mm"
                  ampm={false}
                  ampmInClock={false}
                  onChange={(newValue) => {
                    setEndDateTime(newValue.toISOString());
                  }}
                />
              </div>
            </LocalizationProvider>
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
