import React from "react";

import NewTripInputs from "./NewTripInputs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Dialog, Slide } from "@mui/material";

export default function AddNewTrip({
  onNewTripPressed,
  userID,
  newTripId,
  handleClickOpen,
  displayBtn,
  open,
  handleClickClose,
  setDisplayBtnOn,
  tripDestination,
  setTripDestination,
}) {
  const addButton = (
    <Fab
      sx={{
        bgcolor: "#1c82cd",
        color: "white",
        "&:hover": {
          bgcolor: "#4A53A7",
        },
      }}
      aria-label="add"
      onClick={handleClickOpen}
    >
      <AddIcon />
    </Fab>
  );

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      {displayBtn ? (
        addButton
      ) : (
        <Dialog
          open={open}
          onClose={handleClickClose}
          TransitionComponent={Transition}
        >
          <NewTripInputs
            onSubmitEvent={setDisplayBtnOn}
            onNewTripPressed={onNewTripPressed}
            userID={userID}
            newTripId={++newTripId}
            tripDestination={tripDestination}
            setTripDestination={setTripDestination}
          />
        </Dialog>
      )}
    </div>
  );
}
