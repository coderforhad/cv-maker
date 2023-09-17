import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";

function AutocompleteField({label,tagName, placeholder}) {
  const methods = useFormContext()
  const [inputValue, setInputValue] = useState("");
  const options = [];

  const handleInputChange = (_event: any, newInputValue: React.SetStateAction<string>) => {
    setInputValue(newInputValue);
  };

  const handleDeleteTag = (tagToDelete: any) => {
    const newTags = methods.watch(`${tagName}`)?.filter((tag) => tag !== tagToDelete);
    methods.setValue(`${tagName}`, newTags)
  };

  return (
    <Grid sx={{ width: "100%" }}>
      <Autocomplete
        multiple
        id="tag-input"
        options={options}
        value={methods.watch(`${tagName}`)}
        onChange={(_, newValue) => methods.setValue(`${tagName}`, newValue)}
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
            placeholder={placeholder}
          />
        )}
      />
    </Grid>
  );
}

export default AutocompleteField;