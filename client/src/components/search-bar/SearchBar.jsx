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
import { Clear as ClearIcon, Search as SearchIcon } from "@mui/icons-material";

function SearchBar({
  searchInput,
  selectedCategory,
  handleSearchInputChange,
  handleSearchClick,
  handleSearchClear,
  handleCategoryChange,
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
    {
      label: "Bakeries",
      value: "bakery",
    },
    {
      label: "Bars",
      value: "bar",
    },
    {
      label: "Night Clubs",
      value: "night_club",
    },
    {
      label: "Spa",
      value: "spa",
    },
    {
      label: "Aquariums",
      value: "aquarium",
    },
    {
      label: "Zoo",
      value: "zoo",
    },
  ];

  return (
    <Paper
      component="form"
      sx={{
        boxSizing: "border-box",
        p: "2px 4px",
        margin: "5px",
        display: "flex",
        alignItems: "center",
        minWidth: 275,
        maxWidth: 425,
      }}
    >
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
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearchClick}
      >
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
