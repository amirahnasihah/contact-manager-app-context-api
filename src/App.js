import "./App.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FooterContact from "./components/FooterContact";
import AddContact from "./components/AddContact";
import ListContact from "./components/ListContact";
import DetailContact from "./components/DetailContact";
import api from "./api/contacts";
import EditContact from "./components/EditContact";

function App(props) {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // Get Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // CREATE ADD
  const addContactHandler = async (contact) => {
    console.log("addContactHandler", contact);
    const request = {
      id: uuidv4(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    // console.log(response);
    // setContacts([...contacts, { id: uuidv4(), ...contact }]);
    setContacts([...contacts, response.data]);
  };

  // UPDATE CONTACT
  const updateContactHandler = async (contact) => {
    console.log("updateContactHandler", contact);

    const response = await api.put(`/contacts/${contact.id}`, contact);
    // console.log(response.data);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  // DELETE
  const deleteContact = async (id) => {
    console.log("deleteContact", id);
    await api.delete(`/contacts/${id}`);
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) setContacts(retrieveContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
      <Routes>
        <Route
          path="/"
          {...props}
          element={
            <ListContact contacts={contacts} deleteContact={deleteContact} />
          }
        />
        <Route
          path="/add"
          {...props}
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/edit"
          {...props}
          element={<EditContact updateContactHandler={updateContactHandler} />}
        />
        <Route path="/contact/:id" element={<DetailContact />} />
      </Routes>
      <FooterContact />
    </Grid>
  );
}

export default App;
