import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

export default function EmptyTripList({
  itemData,
  setTripDestination,
  handleClickOpen,
}) {
  return (
    <ImageList variant="quilted" sx={{ width: 350, margin: "0 auto" }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "18px",
            background: "none",
          }}
        >
          Top destinations for your next trip
        </ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          onClick={() => {
            handleClickOpen();
            setTripDestination(item.title);
          }}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
            title={item.title}
            position="top"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
