import React from "react";
import "../App.css";
import CardContact from "./CardContact";

const ListContact = ({ contacts, deleteContact }) => {
  const deleteHandler = (id) => {
    // getContactId
    console.log("deleteHandler", id);
    deleteContact(id);
  };

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
      <div>{renderContactList}</div>
    </div>
  );
};

export default ListContact;
