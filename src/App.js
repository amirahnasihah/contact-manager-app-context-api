import "./App.css";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import FooterContact from "./components/FooterContact";
import AddContact from "./components/AddContact";
import ListContact from "./components/ListContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // CREATE ADD
  const addContactHandler = (contact) => {
    console.log("addContactHandler", contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  // DELETE
  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  // useEffect(() => {
  //   const retrieveContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY)
  //   );
  //   if (retrieveContacts) setContacts(retrieveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Grid
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 1000,
        flexGrow: 1,
      }}
    >
      <Header />
      <Box
        sx={{
          gridArea: "main",
          bgcolor: "secondary.main",
        }}
      >
        <AddContact addContactHandler={addContactHandler} />
        <ListContact contacts={contacts} deleteContact={deleteContact} />
      </Box>
      <FooterContact />
    </Grid>
  );
}

export default App;