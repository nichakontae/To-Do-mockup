import { Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import styled from "./todoitem.module.css";

const TodoItem = ({ task, date, isDone, settodo, todo, id }) => {
  const [done, setDone] = useState(isDone);
  // const [click, setClick] = useState(false);

  // const handleClick = () => setDone(!done);
  const toggle = () => {
    settodo(
      todo.map((el) => {
        if (el.id === id) {
          el.isDone = !el.isDone;
          // setDone(el.isDone);
        }
        return el;
      })
    );
  };
  return (
    <Box
      className={isDone ? styled.done_box : styled.undone_box}
      onClick={() => {
        // handleClick();
        // onClick(done);
        toggle();
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }}>{task}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <EventNoteIcon />
          <Typography sx={{ marginLeft: "10px" }}>{date}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <img
            alt={isDone ? "done" : "undone"}
            src={isDone ? "assets/done.png" : "assets/undone.png"}
          />
          <Typography sx={{ marginLeft: "10px" }}>
            {isDone ? "Done" : "Undone"}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TodoItem;
