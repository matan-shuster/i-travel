import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import StarIcon from "@mui/icons-material/Star";
import json from "./restaurants.json";

function AddEvent() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categoriesList = ["All", "Restaurants", "Cafes", "Hotels", "Museums"];

  const handleSearchInputChange = (e) => setSearchInput(e.target.value);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  const handleSearchClear = () => setSearchInput("");

  const renderRatingStars = (rating) => {
    let stars = [];

    for (let i = 0; i < Math.round(rating); i++) {
      stars.push(<StarIcon fontSize="small" />);
    }

    return stars;
  };

  return (
    <div>
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
          value={searchInput}
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearchInputChange}
        />
        {searchInput.length > 0 ? (
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearchClear}
          >
            <ClearIcon />
          </IconButton>
        ) : (
          ""
        )}

        <FormControl variant="filled" sx={{ m: 1, minWidth: 135 }} size="small">
          <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={selectedCategory}
            label="Category"
            onChange={handleCategoryChange}
          >
            {categoriesList.map((category, index) => {
              return (
                <MenuItem key={`category-${index}`} value={index}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Paper>
      {json.results
        .filter(
          (result) =>
            result.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            searchInput === ""
        )
        .map((result, index) => {
          return (
            <Card key={`result-${index}`} sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  {renderRatingStars(result.rating)}
                </Typography>
                <Typography variant="h6" component="div">
                  {result.name}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  {result.formatted_address}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}

export default AddEvent;
