import React, { useRef, useEffect } from "react";
import "../App.css";
import CardContact from "./CardContact";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/contacts-crud-context";

const ListContact = () => {
  // console.log("ListContact props:", { contacts, deleteContact, searchTerm, handleSearch });
  const {
    contacts,
    retrieveContacts,
    handleSearch,
    searchTerm,
    searchResults,
  } = useContactsCrud();
  const inputElement = useRef("");

  useEffect(() => {
    retrieveContacts();
  }, [retrieveContacts]);

  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <CardContact contact={contact} key={contact.id} />;
  });

  const getSearchTerm = () => {
    // console.log("getSearchTerm", inputElement.current.value);
    handleSearch(inputElement.current.value);
  };

  return (
    <div>
      <h2 className="App">List of My Contact</h2>
      <Link to="/add" className="link-btn">
        <Button variant="contained">Add Contact</Button>
      </Link>
      <div className="App">
        <label>👉</label>
        <input
          ref={inputElement}
          type="text"
          placeholder="search contact..."
          value={searchTerm}
          onChange={getSearchTerm}
        />
      </div>
      <div>
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ListContact;
