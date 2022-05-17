import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Title from "./Title";
import Input from "./Input";
import TextBottom from "./TextBottom";

const InputPart = () => {
  return (
    <Box
      sx={{
        // border: "1px solid white",
        // width: "calc(100% - (100%/2 - 80px))",
        height: "100%",
        padding: "1.5rem 2rem",
      }}
      flex="2"
    >
      <Title text="Welcome Back" />
      <Typography
        sx={{ color: "#C5C5C5", fontSize: "15px", marginBottom: "15px" }}
      >
        We’re so excited to sleep again 😴
      </Typography>
      <Stack direction="column">
        <Input type="text" label="EMAIL OR PHONE NUMBER" />
        <Input type="password" label="PASSWORD" />
        <TextBottom text="Forget your password" color="#0095D2" />

        <Button
          sx={{
            backgroundColor: "#505CEA",
            color: "white",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Login
        </Button>
        <Stack direction="row">
          <TextBottom text="Need an account?" color="#C5C5C5" />
          &nbsp;
          <TextBottom text="Register" color="#0095D2" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default InputPart;
