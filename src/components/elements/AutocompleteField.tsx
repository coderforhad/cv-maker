import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Grid } from "@mui/material";

function AutocompleteField({label}) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const options = ["Tag1", "Tag2", "Tag3", "Tag4"];

  const handleInputChange = (_event: any, newInputValue: React.SetStateAction<string>) => {
    setInputValue(newInputValue);
  };

  const handleDeleteTag = (tagToDelete: any) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
  };

  return (
    <Grid sx={{ width: "700px" }}>
      <Autocomplete
        multiple
        id="tag-input"
        options={options}
        value={tags}
        onChange={(_, newValue) => setTags(newValue)}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag}
              onDelete={() => handleDeleteTag(tag)} 
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label= {label}
            placeholder="Type and press Enter to add tags"
          />
        )}
      />
    </Grid>
  );
}

export default AutocompleteField;
