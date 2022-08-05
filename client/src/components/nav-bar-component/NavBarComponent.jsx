import React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";
import {
  ListAlt as ListAltIcon,
  Public as PublicIcon,
  AddLocation as AddLocationIcon,
} from "@mui/icons-material";

function NavBarComponent({ currentPage, tripId, tripName }) {
  if (currentPage === "tripListContainer") {
    return (
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "5px" }}>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Trips
          </Typography>
        </Breadcrumbs>
      </div>
    );
  } else if (currentPage === "tripEventsConatiner") {
    return (
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "5px" }}>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/trips/list"
          >
            <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Trips
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <ListAltIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {tripName}
          </Typography>
        </Breadcrumbs>
      </div>
    );
  } else {
    return (
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "5px" }}>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/trips/list"
          >
            <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Trips
          </Link>
          <Link
            underline="hover"
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "160px",
            }}
            color="inherit"
            href={`/trip/${tripId}`}
          >
            <ListAltIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {tripName}
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <AddLocationIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            New Event
          </Typography>
        </Breadcrumbs>
      </div>
    );
  }
}

export default NavBarComponent;
