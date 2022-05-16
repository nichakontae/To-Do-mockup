import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Title from "./Title";
import Input from "./Input";
import TextBottom from "./TextBottom";

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
          <Box
            sx={{
              // border: "1px solid white",
              width: "calc(100% - (100%/2 - 80px))",
              height: "100%",
              padding: "1.5rem 2rem",
            }}
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
          <Box
            sx={{
              // border: "1px solid white",
              width: "calc(100%/2 - 80px)",
              height: "100%",
              padding: "0 1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="assets/spotify.png" alt="spotify" width="200" />
            <Title text="Unable to Login?" />
            <Typography sx={{ color: "white", fontSize: "0.75rem" }}>
              Listen to some music, relax yourself, and take a deep breath until
              you can remember your password.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
