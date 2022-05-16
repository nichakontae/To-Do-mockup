import { Typography } from "@mui/material";
import React from "react";

const TextBottom = ({ text, color }) => {
  return (
    <Typography sx={{ color: { color }, fontSize: "12px", textAlign: "start" }}>
      {text}
    </Typography>
  );
};

export default TextBottom;
