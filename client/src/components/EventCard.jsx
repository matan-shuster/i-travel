import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Collapse,
  TextField,
  Button,
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
      for (let i = 0; i < Math.round(rating); i++) {
        ratingView.push(<StarIcon fontSize="small" />);
      }
    }

    return ratingView;
  };

  return (
    <Card key={`result-${index}`} sx={{ minWidth: 275 }} variant="outlined">
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
          <Typography paragraph>Schedule</Typography>
          <TextField
            id="datetime-local"
            label="Start"
            type="datetime-local"
            defaultValue="2022-08-08T16:00"
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="datetime-local"
            label="End"
            type="datetime-local"
            defaultValue="2022-08-08T19:00"
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="text" onClick={() => handleExpandClick(index)}>
            Close
          </Button>
          <Button variant="contained">Save</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EventCard;
