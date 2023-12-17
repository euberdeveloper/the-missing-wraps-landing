import React, {FC, useState} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import DatePicker, {DateObject} from "react-multi-date-picker";

interface props {
    open: boolean;
    handleClose: () => void;
}

const BookDialog: FC<props> = ({open, handleClose}) => {
    const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());

    const handleCancel = () => {
        setValue(new DateObject());
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Try Our Service</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Pick a date and try our service by yourself!
                </DialogContentText>
                <label>Date: </label>
                <DatePicker multiple value={value} onChange={setValue} />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BookDialog;
