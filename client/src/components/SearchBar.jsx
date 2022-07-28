import React from "react";
import {
  Paper,
  InputBase,
  IconButton,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { Menu as MenuIcon, Clear as ClearIcon } from "@mui/icons-material";

function SearchBar({
  searchInput,
  setSearchInput,
  selectedCategory,
  setSelectedCategory,
  setExpandedId,
}) {
  const categoriesList = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Restaurants",
      value: "restaurant",
    },
    {
      label: "Cafes",
      value: "cafe",
    },
    {
      label: "Hotels",
      value: "lodging",
    },
    {
      label: "Museums",
      value: "museum",
    },
  ];

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    setExpandedId(-1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setExpandedId(-1);
  };

  const handleSearchClear = () => {
    setSearchInput("");
    setExpandedId(-1);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: 275,
        margin: "5px",
      }}
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
          type="button"
          sx={{ p: "10px" }}
          aria-label="clear"
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
              <MenuItem key={`category-${index}`} value={category.value}>
                {category.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default SearchBar;
