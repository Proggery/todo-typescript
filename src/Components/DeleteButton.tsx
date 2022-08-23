import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { FC } from "react";
import { red } from "@mui/material/colors";

interface IProps {
  task: string;
  completeTask: (taskNameToDelete: string) => void;
}

const DeleteButton: FC<IProps> = ({ task, completeTask }) => {
  return (
    <Tooltip title="Delete">
      <IconButton
        onClick={() => {
          completeTask(task);
        }}
      >
        <DeleteIcon sx={{ color: red[500] }} />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
