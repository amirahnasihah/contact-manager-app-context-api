import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "../App.css";

const AddContact = () => {
  return (
    <div className="App">
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
        <Box>
          <Button variant="outlined" component="label">
            Upload Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Box>
        <Box
          sx={{
            m: 1,
          }}
        >
          <Button variant="contained">Add</Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddContact;
