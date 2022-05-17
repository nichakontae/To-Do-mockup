import React, { useState } from "react";
import { Typography, Box, Grid, Stack } from "@mui/material";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [add, setAdd] = useState(0);

  const addTodo = (task) => {
    setTodo([{ label: task, date: new Date(), done: false }, ...todo]);
  };
  const create = () => {
    setAdd(add + 1);
  };

  return (
    <Box
      height="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(180deg, #6366f1 0%,  #c4c5f5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        // padding: "2rem 1rem 0 1rem",
      }}
    >
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#F7F7F7",
          height: "calc(100vh - 180px)",
          width: "calc(100% - 60px)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          padding: "2rem 1rem",
        }}
      >
        <Typography variant="h2">What you need to do?</Typography>
        <NewTodo addTodo={addTodo} create={create} />
        <Stack direction="row" justifyContent="center">
          <TodoList text="To-dos" times={add} />
          <TodoList text="Done Tasks" times={0} />
          <TodoList text="Undone Tasks" times={0} />
        </Stack>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* <Grid item xs={12} md={6}>
            <TodoItem
              task="TODODODOD"
              date="2022-04-29T10:59-0500"
              doneOr="false"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TodoItem
              task="TODODODOD"
              date="2022-04-29T10:59-0500"
              doneOr="false"
            />
          </Grid> */}
          {todo.map((todos, index) => {
            return (
              <Grid item xs={12} md={6}>
                <TodoItem task={todos.label} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Todos;
