import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

const Title = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
        fontSize: "1rem",
        color: "white",
        margin: "5px 0",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
