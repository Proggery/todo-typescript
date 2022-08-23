import { useState } from "react";
import { ChangeEvent } from "react";
import { FC, Dispatch, SetStateAction } from "react";
import { ITASK } from "../Interfaces";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styled from "styled-components";

interface IProps {
  todoList: ITASK[];
  setTodoList: Dispatch<SetStateAction<ITASK[]>>;
}

const TodoForm: FC<IProps> = ({ todoList, setTodoList }) => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    console.log(todoList);
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  const NewButton = styled(Button)`
    color: red;
    font-weight: bold;
  `;

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="task"
          onChange={handleChange}
          value={task ? task : ""}
          id="outlined-basic"
          label="Add Text"
          variant="outlined"
        />
        <TextField
          name="deadline"
          onChange={handleChange}
          value={deadline ? deadline : ""}
          id="outlined-basic"
          label="Add Number"
          variant="outlined"
        />
        <Button
          sx={{
            borderRadius: 50,
            width: "50px !important",
            height: 50,
            minWidth: 0,
          }}
          onClick={addTask}
          variant="contained"
        >
          OK!
        </Button>
      </Box>
    </>
  );
};

export default TodoForm;
