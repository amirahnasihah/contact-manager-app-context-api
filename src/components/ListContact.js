import React, { useRef } from "react";
import "../App.css";
import CardContact from "./CardContact";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ListContact = ({ contacts, deleteContact, searchTerm, handleSearch }) => {
  // console.log("ListContact props:", { contacts, deleteContact, searchTerm, handleSearch });

  const inputElement = useRef("");

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
