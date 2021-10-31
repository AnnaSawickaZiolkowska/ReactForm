import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  id,
  label,
  type,
  helperText,
  value,
  onChange,
  error,
  inputProps,
  InputLabelProps,
}) => {
  return (
    <TextField
      margin="normal"
      type={type}
      id={id}
      label={label}
      variant="outlined"
      color="primary"
      helperText={helperText}
      fullWidth
      value={value}
      onChange={onChange}
      required
      error={error}
      inputProps={inputProps}
      InputLabelProps={InputLabelProps}
    />
  );
};

export default Input;
