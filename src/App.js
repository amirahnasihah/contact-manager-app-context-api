import "./App.css";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateRows: "repeat(1, 1fr)",
          gridTemplateAreas: `"header header header header"
  "main main main main"
  "footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
            bgcolor: "primary.main",
            textAlign: "center",
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            gridArea: "main",
            bgcolor: "secondary.main",
          }}
        >
          <AddContact addContactHandler={addContactHandler} />
          <ListContact contacts={contacts} deleteContact={deleteContact} />
        </Box>
        {/* <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}></Box> */}
        <Box
          sx={{
            gridArea: "footer",
            bgcolor: "warning.dark",
            textAlign: "center",
          }}
        >
          <FooterContact />
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
