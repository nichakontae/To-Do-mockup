import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

const NavbarItem = ({ text }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#E5E5E5",
        color: "black",
        marginRight: "12px",
        borderRadius: "10px",
        padding: "0.2rem 1.5rem",
      }}
    >
      {text}
    </Button>
  );
};

export default NavbarItem;
