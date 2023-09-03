import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";

function AutocompleteField({label}) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  return (
    <div>
      <div>
        {tags.map((tag, index) => (
          <Chip key={index} label={tag} onDelete={handleDeleteTag(tag)} style={{ margin: "4px" }} />
        ))}
      </div>
      <TextField
        label={label}
        variant="filled"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAddTag();
          }
        }}
        InputProps={{
          endAdornment: <AddIcon onClick={handleAddTag} style={{ cursor: "pointer" }} />,
        }}
        fullWidth
      />
    </div>
  );
}

export default AutocompleteField;
