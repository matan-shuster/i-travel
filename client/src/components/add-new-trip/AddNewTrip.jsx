import React, { useState, useCallback } from "react";

import NewTripInputs from "./NewTripInputs";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Dialog, Slide } from "@mui/material";

export default function AddNewTrip({ onNewTripPressed, userID, newTripId }) {
  const [displayBtn, setDisplayBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const setDisplayBtnOn = useCallback(() => {
    setDisplayBtn(true);
  }, []);

  const addButtom = (
    <Fab
      sx={{ bgcolor: "darkblue", color: "white" }}
      aria-label="add"
      onClick={() => {
        setDisplayBtn(false);
        handleClickOpen();
      }}
    >
      <AddIcon />
    </Fab>
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDisplayBtn(true);
  };
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      {displayBtn ? (
        addButtom
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <NewTripInputs
            onSubmitEvent={setDisplayBtnOn}
            onNewTripPressed={onNewTripPressed}
            userID={userID}
            newTripId={++newTripId}
          />
        </Dialog>
      )}
    </div>
  );
}
