import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const NewTodo = ({ addTodo, create }) => {
  const [task, setTask] = useState("");
  return (
    <Box
      sx={{
        margin: "30px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <Stack direction="row"> */}
      <TextField
        id="component-outlined"
        sx={{
          backgroundColor: "white",
          width: "20%",
          height: "50px",
          borderRadius: "12px",
          marginRight: "12px",
        }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        onClick={() => {
          addTodo(task);
          create();
        }}
      >
        add!
      </Button>
    </Box>
  );
};

export default NewTodo;
