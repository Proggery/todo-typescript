import { Chip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ITASK } from "../Interfaces";
import DeleteButton from "./DeleteButton";

interface IProps {
  task: ITASK;
  todoList: ITASK[];
  setTodoList: Dispatch<SetStateAction<ITASK[]>>;
}

const TodoTask = ({ task, todoList, setTodoList }: IProps) => {
  // DELETE TASK
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };
  return (
    <div>
      {task.taskName !== "" && (
        <>
          <Chip
            label={`${task.taskName} ${
              task.deadline < 1 ? "" : `(${task.deadline})`
            }`}
            variant="outlined"
          />
          <DeleteButton completeTask={completeTask} task={task.taskName} />
        </>
      )}
    </div>
  );
};

export default TodoTask;
