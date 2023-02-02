import React from "react";
import "../App.css";
import CardContact from "./CardContact";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@mui/icons-material";

const ListContact = ({ contacts, deleteContact }) => {
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
        <input type="text" placeholder="search..." />
      </div>
      <div> {renderContactList} </div>
    </div>
  );
};

export default ListContact;
