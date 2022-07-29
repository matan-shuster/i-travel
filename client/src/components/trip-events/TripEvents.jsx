import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function TripEvents({ tripName = "Tel Aviv", events = [] }) {
  return (
    <div>
      <div>{tripName}</div>
      <div>
        <Fab
          sx={{ bgcolor: "red", color: "white" }}
          aria-label="add"
          onClick={() => {
            return;
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default TripEvents;
