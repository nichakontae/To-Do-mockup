import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  // const [add, setAdd] = useState(0);
  // const [countDone, setCountDone] = useState(0);
  // const [countUndone, setCountUndone] = useState(0);

  const addTodo = (task, date) => {
    setTodo([
      { label: task, date: date, isDone: false, id: Math.random() },
      ...todo,
    ]);
  };
  // const create = () => {
  //   setAdd(add + 1);
  //   setCountUndone(countUndone + 1);
  // };

  // const doneTask = (doneHa) => {
  //   if (doneHa === true) {
  //     setCountDone(countDone - 1);
  //     setCountUndone(countUndone + 1);
  //   } else {
  //     setCountDone(countDone + 1);
  //     setCountUndone(countUndone - 1);
  //   }
  // };

  return (
    <Box
      height="100%"
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
          marginTop: "90px",
          backgroundColor: "#F7F7F7",
          height: "calc(100vh - 180px)",
          width: "calc(100% - 60px)",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          padding: "2rem 1rem",
        }}
      >
        <Typography variant="h2">What you need to do?</Typography>
        <NewTodo addTodo={addTodo} />

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={3}>
            <TodoList text="To-dos" times={todo.length} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TodoList
              text="Done Tasks"
              times={todo.filter((el) => el.isDone === true).length}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TodoList
              text="Undone Tasks"
              times={todo.filter((el) => el.isDone === false).length}
            />
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {todo.map((todos, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <TodoItem
                  id={todos.id}
                  task={todos.label}
                  // onClick={doneTask}
                  date={todos.date}
                  isDone={todos.isDone}
                  settodo={setTodo}
                  todo={todo}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Todos;
