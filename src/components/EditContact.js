import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/contacts-crud-context";

const EditContact = () => {
  const location = useLocation();
  const { id, name, email } = location.state.contact;
  // const newDetail = {
  //   name,
  //   email,
  // };
  // const [addContactForm, setAddContactForm] = useState(newDetail);
  const navigate = useNavigate();
  const { updateContactHandler } = useContactsCrud();
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "") {
      alert("All the fields are required");
      return;
    }
    // updateContactHandler({ id, ...addContactForm });
    // setAddContactForm({ name: "", email: "" });
    updateContactHandler({ id, name: newName, email: newEmail });
    setNewName("");
    setNewEmail("");
    navigate(-1);
  };

  return (
    <div className="App">
      <h2>Edit Contact Form</h2>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={update}
      >
        <div>
          <TextField
            required
            id="name"
            label="Name"
            type="text"
            // value={addContactForm.name}
            value={newName}
            // onChange={(e) => setAddContactForm({ ...addContactForm, name: e.target.value }) }
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="email"
            label="Email Address"
            type="email"
            // value={addContactForm.email}
            // onChange={(e) => setAddContactForm({ ...addContactForm, email: e.target.value }) }
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        {/* <Button variant="outlined" component="label">
          Upload Image
          <input hidden accept="image/*" multiple type="file" />
        </Button> */}

        <Grid
          item
          sx={{
            m: 1,
          }}
        >
          <Box sx={{ "& button": { m: 1 } }}>
            <div>
              <Button variant="contained" size="small" type="submit">
                Edit
              </Button>
              <Link to="/" className="link-btn">
                <Button variant="contained" size="small">
                  Cancel
                </Button>
              </Link>
            </div>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default EditContact;
