import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <Box
      sx={{
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        backgroundColor: "rgb(248 250 252)",
        color: "rgb(0,0,0)",
        position: "fixed",
        width: "100%",
        zIndex: "1",
      }}
    >
      <Container>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          height="54px"
        >
          <Link to="/todos" style={{ textDecoration: "none" }}>
            <Stack direction="row" alignItems="center" className="logo">
              <img src="assets/logo.png" alt="logo" height="40" />
              <Typography>Due Today, Do Tomorrow</Typography>
            </Stack>
          </Link>

          <Box>
            <NavbarItem text="Login" to="/" />
            <NavbarItem text="Home" to="/todos" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
