import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";

export default function InputField({ label, name }) {
  const { register } = useFormContext();
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "grid",
        gap: 2,
      }}
    >
      <TextField
        {...register(`${name}`)}
        label={label}
        id="reddit-input"
        variant="filled"
        style={{ marginTop: 11 }}
      />
    </Box>
  );
}
