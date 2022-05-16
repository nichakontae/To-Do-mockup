import React from "react";
import {
  InputLabel,
  OutlinedInput,
  TextField,
  FormControl,
  Typography,
} from "@mui/material";

const Input = ({ type, label }) => {
  return (
    <FormControl sx={{ margin: "10px 0" }}>
      <Typography
        sx={{ color: "#C5C5C5", textAlign: "start", marginBottom: "10px" }}
      >
        {label}
      </Typography>
      <OutlinedInput
        id="component-outlined"
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "40px",
          borderRadius: "15px",
        }}
      />
    </FormControl>
  );
};

export default Input;
