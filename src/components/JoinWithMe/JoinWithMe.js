import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import "./JoinWithMe.css"; // Add styling as needed

const JoinWithMe = () => {
  const [open, setOpen] = useState(false);

  // Functions to open and close the dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen} className="joinButton">
        Join With Me
      </Button>

      {/* Pop-up Join With Me Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join With Me</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Name" type="text" fullWidth variant="outlined" />
          <TextField margin="dense" label="Email ID" type="email" fullWidth variant="outlined" />
          <TextField margin="dense" label="Message" type="text" fullWidth multiline rows={4} variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default JoinWithMe;
