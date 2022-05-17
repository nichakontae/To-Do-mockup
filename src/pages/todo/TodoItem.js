import { Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import styled from "./todoitem.module.css";

const TodoItem = ({ task, date, doneOr, onClick }) => {
  const [done, setDone] = useState(false);
  // const [click, setClick] = useState(false);

  const handleClick = () => setDone(!done);

  return (
    <Box
      className={done ? styled.done_box : styled.undone_box}
      onClick={() => {
        handleClick();
        onClick(done);
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }}>{task}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <EventNoteIcon />
          <Typography sx={{ marginLeft: "10px" }}>
            2022-04-29T10:59-0500
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <img
            alt={done ? "done" : "undone"}
            src={done ? "assets/done.png" : "assets/undone.png"}
          />
          <Typography sx={{ marginLeft: "10px" }}>
            {done ? "Done" : "Undone"}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TodoItem;
