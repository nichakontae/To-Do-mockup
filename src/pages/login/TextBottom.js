import { Typography } from "@mui/material";
import React from "react";
import "./textbottom.css";

const TextBottom = ({ text, color }) => {
  return (
    <Typography
      sx={{ color: { color }, fontSize: "12px", textAlign: "start" }}
      className="blue"
    >
      {text}
    </Typography>
  );
};

export default TextBottom;
