import React, { useState, useCallback } from "react";

import NewTripInputs from "./NewTripInputs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

export default function AddNewTrip({ onNewTripPressed, userID, newTripId }) {
  const [displayBtn, setDisplayBtn] = useState(true);
  const setDisplayBtnOn = useCallback(() => {
    setDisplayBtn(true);
  }, []);

  const addButtom = (
    <Fab
      sx={{ bgcolor: "red", color: "white" }}
      aria-label="add"
      onClick={() => {
        setDisplayBtn(false);
      }}
    >
      <AddIcon />
    </Fab>
  );

  return (
    <div>
      {displayBtn ? (
        addButtom
      ) : (
        <NewTripInputs
          onSubmitEvent={setDisplayBtnOn}
          onNewTripPressed={onNewTripPressed}
          userID={userID}
          newTripId={++newTripId}
        />
      )}
    </div>
  );
}
