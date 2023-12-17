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

            <DialogContentText>
                Pick a date and try our service by yourself!
            </DialogContentText>
            <label>Date: </label>
            <DatePicker
                // disabledDates={isDateUnavailable}
                multiple
                value={value}
                onChange={setValue}
                // shouldDisable={isDateUnavailable}
                // excludeDates= {unavailableDates}
            />

            <DialogContent>
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
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="Exclusive">Exclusive</option>
                    <option value="Shared">Shared</option>
                </TextField>
                <TextField
                    select
                    SelectProps={{
                        // multiple: true,
                        // onChange: handleChange,
                        native: true,
                    }}
                    label="Service Type"
                    id="service-type"
                    value={serviceTypes}
                    fullWidth
                    variant="standard"
                >
                    <option key="inter" value="Intersection">Intersection</option>
                    <option key="park" value="Parking">Parking</option>
                    {/* </select> */}
                </TextField>

                <TextField
                    select
                    label="Supervised"
                    id="service-type"
                    fullWidth
                    variant="standard"
                    SelectProps={{
                        native: true,
                    }}
                >
                    {/* <select> */}
                    <option value="Exclusive">Supervised</option>
                    <option value="Shared">Unsupervised</option>
                    {/* </select> */}
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
