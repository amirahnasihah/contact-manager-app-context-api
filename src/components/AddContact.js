import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

const AddContact = () => {
  const contactForm = {
    name: "",
    email: "",
  };

  const [addContactForm, setAddContactForm] = useState(contactForm);

  const addContact = (e) => {
    e.preventDefault();
    if (addContactForm.name === "" || addContactForm.email === "") {
      alert("All the fields are required");
      return;
    }
  };

  return (
    <div className="App">
      <h3>Add Contact Form</h3>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={addContact}
      >
        <div>
          <TextField
            required
            id="name"
            label="Name"
            type="text"
            value={addContactForm.name}
            onChange={(e) =>
              setAddContactForm({ ...addContactForm, name: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            id="email"
            label="Email Address"
            type="email"
            value={addContactForm.email}
            onChange={(e) =>
              setAddContactForm({ ...addContactForm, email: e.target.value })
            }
          />
        </div>

        <Button variant="outlined" component="label">
          Upload Image
          <input hidden accept="image/*" multiple type="file" />
        </Button>

        <Grid
          item
          sx={{
            m: 1,
          }}
        >
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default AddContact;
