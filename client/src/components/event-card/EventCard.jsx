import React from "react";
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

function EventCard({ result, index, expandedId, setExpandedId }) {
  const handleExpandClick = (index) => {
    setExpandedId(expandedId === index ? -1 : index);
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
      key={`result-${index}`}
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
          {renderRatingView(result.rating)}
        </Typography>
        <Typography variant="h6" component="div">
          {result.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {result.formatted_address}
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
            <Button variant="contained">Save</Button>
          </Stack>
          <TextField
            id="datetime-local"
            label="Start Time"
            type="datetime-local"
            defaultValue="2022-08-08T16:00"
            sx={{ width: 200, margin: "10px 0 10px 0" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="End Time"
            type="datetime-local"
            defaultValue="2022-08-08T19:00"
            sx={{ width: 200, margin: "10px 0 10px 0" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
