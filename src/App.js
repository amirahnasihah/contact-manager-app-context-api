import "./App.css";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import api from "./api/contacts";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FooterContact from "./components/FooterContact";
import AddContact from "./components/AddContact";
import ListContact from "./components/ListContact";
import DetailContact from "./components/DetailContact";
import EditContact from "./components/EditContact";
import { ContactsCrudContextProvider } from "./context/contacts-crud-context";

function App(props) {
  return (
    <Grid
      sx={{
        p: 1,
        margin: "auto",
        maxWidth: 1000,
        flexGrow: 1,
      }}
    >
      <Header />
      <ContactsCrudContextProvider>
        <Routes>
          <Route path="/" {...props} element={<ListContact />} />
          <Route path="/add" {...props} element={<AddContact />} />
          <Route path="/edit" {...props} element={<EditContact />} />
          <Route path="/contact/:id" element={<DetailContact />} />
        </Routes>
      </ContactsCrudContextProvider>
      <FooterContact />
    </Grid>
  );
}

export default App;
