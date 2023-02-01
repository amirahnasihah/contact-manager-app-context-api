import React from "react";
import "../App.css";
import CardContact from "./CardContact";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ListContact = ({ contacts, deleteContact }) => {
  const deleteHandler = (id) => {
    // getContactId
    console.log("deleteHandler", id);
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
      {" "}
      <h2 className="App">List of My Contact</h2>{" "}
      <Link to={`/add`} className="link-btn">
        {" "}
        <Button variant="contained">Add Contact</Button>{" "}
      </Link>{" "}
      <div> {renderContactList}</div>{" "}
    </div>
  );
};

export default ListContact;
