import React, { useState } from "react";
import { Link } from "react-scroll";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Functions to open and close the dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <div className="header_left">
        <h1>UX /<span>UI</span> Engineer</h1>
      </div>

      <div className="header_right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About me</h4>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>

        <Link to="projects" smooth={true} duration={500} offset={-150}>
          <h4>Portfolio profiles</h4>
        </Link>

        <Link to="exp" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>

        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>

        {/* Join With Me Button */}
        <Button variant="contained" color="primary" className="header_rightbutton" onClick={handleOpen}>
          Join With Me
        </Button>
      </div>

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
    </div>
  );
};

export default Header;
