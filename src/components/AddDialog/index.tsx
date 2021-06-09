import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../hooks";
import { addTask } from "../../store/tasksSlice";
import { useStyles } from "./styles";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { onClose, open } = props;
  const [value, setValue] = useState("");

  const handleClose = () => {
    dispatch(addTask(value));
    setValue("");
    onClose();
  };

  const handleCancel = () => {
    setValue("");
    onClose();
  };

  return (
    <Dialog
      onClose={handleCancel}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Добавление задачи</DialogTitle>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        className={classes.text}
        value={value}
      />

      <Button
        color={"primary"}
        variant="outlined"
        className={classes.btn}
        onClick={handleClose}
        disabled={value.length === 0}
      >
        Добавить задачу
      </Button>
    </Dialog>
  );
}

export const AddDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Добавить задачу
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </Box>
  );
};
