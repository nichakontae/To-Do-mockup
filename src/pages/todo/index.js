import React from "react";
import { Typography, Box } from "@mui/material";

const Todos = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(180deg, #6366f1 0%,  #c4c5f5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "2rem 1rem 0 1rem",
      }}
    >
      <Box
        sx={{
          marginTop: "10%",
          backgroundColor: "#F7F7F7",
          height: "calc(100vh - 10%)",
          width: "calc(100% - 60px)",
          borderRadius: "12px",
        }}
      >
        HI
      </Box>
    </Box>
  );
};

export default Todos;
