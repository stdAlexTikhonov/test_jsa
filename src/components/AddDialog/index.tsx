import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { useAppDispatch } from "../../hooks";
import { addTask } from "../../store/tasksSlice";
import { useStyles } from "./styles";
import Select from "@material-ui/core/Select";
import { MenuItem, InputLabel, FormControl } from "@material-ui/core";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const priority = ["Критичный", "Высокий", "Средний", "Низкий"];

function SimpleDialog(props: SimpleDialogProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { onClose, open } = props;
  const [value, setValue] = useState("");
  const [prt, setPriority] = useState(0);

  const handleClose = () => {
    dispatch(addTask({ task: value, priority: prt }));
    setValue("");
    setPriority(0);
    onClose();
  };

  const handleCancel = () => {
    setValue("");
    onClose();
    setPriority(0);
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

      <FormControl className={classes.text} style={{ marginTop: 10 }}>
        <InputLabel id="demo-simple-select-label">Приоритет</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={prt}
          onChange={(e: any) => setPriority(e.target.value)}
        >
          {priority.map((item, i) => (
            <MenuItem value={i} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
