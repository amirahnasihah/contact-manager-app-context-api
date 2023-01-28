import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const AddContact = () => {
  return (
    <div>
      <h3>Add Contact</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="name" label="Name" />
        </div>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </div>
        <div>
          <label htmlFor="image">File</label>
          <input type="file" accept="image/*" />
        </div>
        <div>
          <Button variant="contained">Add</Button>
        </div>
      </Box>
    </div>
  );
};

export default AddContact;
