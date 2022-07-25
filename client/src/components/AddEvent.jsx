import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddEvent() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = ["All", "Restaurants", "Cafes", "Hotels", "Museums"];

  const handleChange = (e) => setSelectedCategory(e.target.value);

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCategory}
        label="Category"
        onChange={handleChange}
      >
        {categories.map((item, index) => {
          return (
            <MenuItem key={index} value={index}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default AddEvent;
