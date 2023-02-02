import React from "react";
import "../App.css";
import CardContact from "./CardContact";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ListContact = ({ contacts, deleteContact, handleSearch, searchTerm }) => {
  const deleteHandler = (id) => {
    // to getContactId
    // console.log("deleteHandler", id);
    deleteContact(id);
  };

  // const contacts = [
  //   {
  //     id: 1,
  //     name: "John",
  //     email: "john@gmail.com",
  //   },
  // ];

  const renderContactList = contacts.map((contact) => {
    return (
      <CardContact
        contact={contact}
        key={contact.id}
        deleteHandler={deleteHandler}
      />
    );
  });

  return (
    <div>
      <h2 className="App">List of My Contact</h2>
      <Link to="/add" className="link-btn">
        <Button variant="contained">Add Contact</Button>
      </Link>
      <div className="App">
        <label>👉</label>
        <input
          type="text"
          placeholder="search contact..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div> {renderContactList} </div>
    </div>
  );
};

export default ListContact;
