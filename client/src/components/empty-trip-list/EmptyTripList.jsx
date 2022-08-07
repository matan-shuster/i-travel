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
    <ImageList
      variant="quilted"
      sx={{ width: 350, margin: "0 auto", maxHeight: "65vh" }}
    >
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
