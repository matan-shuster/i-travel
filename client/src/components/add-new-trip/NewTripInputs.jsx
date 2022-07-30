import React, { useState } from "react";
import styles from "./newTripInputStyle.module.css";

import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function NewTripInputs({
  onSubmitEvent,
  onNewTripPressed,
  userID,
  newTripId,
}) {
  const [startDateValue, setStartDateValue] = useState(new Date());
  const [endDateValue, setEndDateValue] = useState(new Date());
  const [tripName, setTripName] = useState("");
  const startNewTrip = () => {
    //validation check
    //send to backend
    //update app (callback/redux)
    setStartDateValue(new Date());
    setEndDateValue(new Date());
    setTripName("");
    onNewTripPressed({
      userID: userID,
      id: newTripId,
      startDate: startDateValue,
      endDate: endDateValue,
      name: tripName,
      events: [],
    });
    onSubmitEvent();
  };

  return (
    <div className={styles.addNewTrip}>
      <div className={styles.addDates}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            disablePast
            value={startDateValue}
            onChange={(newValue) => {
              setStartDateValue(newValue);
              setEndDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            minDate={startDateValue}
            value={endDateValue}
            onChange={(newValue) => {
              setEndDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <TextField
        value={tripName}
        margin="normal"
        id="standard-search"
        label="Trip Name"
        type="search"
        variant="standard"
        required
        onChange={(e) => {
          setTripName(e.target.value);
        }}
        sx={{ width: "100%" }}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={startNewTrip}
        sx={{ bgcolor: "green" }}
      >
        Start New Adventure!
      </Button>
    </div>
  );
}
