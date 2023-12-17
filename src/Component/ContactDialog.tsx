import React, {FC} from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import Button from "@mui/material/Button";

interface props {
    open: boolean;
    handleClose: () => void;
}

const ContactDialog: FC<props> = ({open, handleClose}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form as HTMLFormElement);
        const name = formData.get("name");
        const email = formData.get("email");
        console.log(name, email);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Contact Us</DialogTitle>
            <form onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText>
                    Want to know more about our services? Please leave your contact here.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Name"
                    name="name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="surname"
                    label="Surname"
                    name="surname"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="company"
                    label="Company"
                    name="company"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
            </form>
        </Dialog>
    );
}

export default ContactDialog;
