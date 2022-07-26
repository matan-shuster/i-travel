import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function AddEvent() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categoriesList = ["All", "Restaurants", "Cafes", "Hotels", "Museums"];

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 135 }} size="small">
        <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedCategory}
          label="Category"
          onChange={handleCategoryChange}
        >
          {categoriesList.map((item, index) => {
            return (
              <MenuItem key={index} value={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default AddEvent;
