import React, {FC, useState} from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import Button from "@mui/material/Button";
import DatePicker, {DateObject} from "react-multi-date-picker";
import { MenuItem } from "@mui/material"

interface props {
    open: boolean;
    handleClose: () => void;
}

const BookDialog: FC<props> = ({open, handleClose}) => {
    const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());
    const unavailableDates = [new Date('2023-12-23'), new Date('2023-12-24')]; // Replace this with your unavailable dates array
    // const disableDates= [new Date(2022/08/2),{from: new Date(2023/05/3),to:new Date(2023/05/8)] ;

    const [serviceTypes, setServiceTypes] = useState<string[]>([]);

    const handleCancel = () => {
        setValue(new DateObject());
        handleClose();
    } ;

    const handleChange = (event: SelectChangeEvent<any>) => {
        console.log(event.target);
        const {
            target: { value },
        } = event;
        setServiceTypes(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    // const isDateUnavailable = (date: DateObject) => {
    //     const dateString = date.toString().split('T')[0];
    //     return unavailableDates.includes(dateString);
    // };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Try Our Service</DialogTitle>
            <DialogContent>
                <label>Date: </label>
                <DatePicker
                    // disabledDates={isDateUnavailable}
                    multiple
                    value={value}
                    onChange={setValue}
                    // shouldDisable={isDateUnavailable}
                    // excludeDates= {unavailableDates}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />

                <TextField
                    select
                    label="Exclusivity"
                    id="exclusivity"
                    fullWidth
                    variant="standard"
                >
                    <MenuItem key="exclusive" value="exclusive">
                        Exclusive
                    </MenuItem>
                    <MenuItem key="shared" value="shared">
                        Shared
                    </MenuItem>
                </TextField>
                <TextField
                    select
                    SelectProps={{
                        multiple: true,
                        onChange: handleChange,
                    }}
                    label="Service Type"
                    id="service-type"
                    value={serviceTypes}
                    fullWidth
                    variant="standard"
                >
                    <MenuItem key="inter" value="intersection">
                        Intersection
                    </MenuItem>
                    <MenuItem key="park" value="park">
                        Parking
                    </MenuItem>
                    <MenuItem key="sim" value="sim">
                        Simulation
                    </MenuItem>
                    <MenuItem key="cons" value="cons">
                        Tech Consulting
                    </MenuItem>
                </TextField>

                <TextField
                    select
                    label="Supervised"
                    id="service-type"
                    fullWidth
                    variant="standard"
                >
                    <MenuItem key="inter" value="super">
                        Supervised
                    </MenuItem>
                    <MenuItem key="park" value="unsuper">
                        Unsupervised
                    </MenuItem>
                </TextField>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BookDialog;
