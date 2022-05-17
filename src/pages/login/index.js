import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import InputPart from "./InputPart";
import RightPart from "./RightPart";

const Login = () => {
  return (
    <Stack
      height="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(180deg, #6366f1 0%,  #c4c5f5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "804px",
          height: "402px",
          backgroundColor: "#2F3237",
          borderRadius: "15px",
        }}
      >
        <Stack justifyContent="center" direction="row" height="100%">
          <InputPart />
          <RightPart />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
