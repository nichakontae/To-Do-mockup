import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Title from "./Title";

const RightPart = () => {
  return (
    <Box
      sx={{
        // border: "1px solid white",
        // width: "calc(100%/2 - 80px)",
        height: "100%",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      flex="1"
    >
      <img src="assets/spotify.png" alt="spotify" width="200" />
      <Title text="Unable to Login?" />
      <Typography sx={{ color: "white", fontSize: "0.75rem" }}>
        Listen to some music, relax yourself, and take a deep breath until you
        can remember your password.
      </Typography>
    </Box>
  );
};

export default RightPart;
