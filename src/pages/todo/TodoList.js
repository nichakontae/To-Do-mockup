import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const TodoList = ({ text, times }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "0 2rem",
        height: "205px",
        width: "340px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        {text}
      </Typography>
      <Typography variant="h3">{times}</Typography>
    </Box>
  );
};

export default TodoList;
