import React, { useState } from "react";
import styles from "./newTripInputStyle.module.css";

import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import apiService from "../../services/apiService";
import deLocale from "date-fns/locale/de";
import { startCase } from "lodash";

export default function NewTripInputs({
  onSubmitEvent,
  onNewTripPressed,
  userID,
  newTripId,
  tripDestination,
}) {
  const [startDateValue, setStartDateValue] = useState(new Date());
  const [endDateValue, setEndDateValue] = useState(new Date());
  const [tripName, setTripName] = useState(tripDestination);
  const [textFieldLabel, setTextFieldLabel] = useState("Trip Location");
  const [textFieldError, setTextFieldError] = useState(false);

  const startNewTrip = async () => {
    if (tripName.length < 2) {
      setTextFieldLabel("Please enter a location");
      setTextFieldError(true);
      return;
    }
    const newTrip = {
      userID: userID,
      startDate: startDateValue,
      endDate: endDateValue,
      name: `Trip to ${startCase(tripName)}`,
      events: [],
    };

    //validation check

    const newTripRes = await apiService.createTrip(newTrip);
    newTrip.id = newTripRes.id;
    //update app (callback/redux)
    setStartDateValue(new Date());
    setEndDateValue(new Date());
    setTripName("");
    setTextFieldError(false);
    setTextFieldLabel("Trip Location");
    onNewTripPressed(newTrip);
    onSubmitEvent();
  };

  return (
    <div className={styles.addNewTrip}>
      <div className={styles.addDates}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={deLocale}
        >
          <DatePicker
            format="local"
            label="Start Date"
            disablePast
            type="date-local"
            inputFormat="dd/MM/yyyy"
            value={startDateValue}
            onChange={(newValue) => {
              setStartDateValue(newValue);
              setEndDateValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            type="local"
            inputFormat="dd/MM/yyyy"
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
        label={textFieldLabel}
        error={textFieldError}
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
        disabled={tripName === ""}
      >
        Start New Adventure!
      </Button>
    </div>
  );
}
