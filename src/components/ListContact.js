import React from "react";
import CardContact from "./CardContact";
import { Grid, ListItem } from "@mui/material";

const ListContact = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return <CardContact key={contact.id} contact={contact} />;
  });

  return (
    <div>
      <h3>List of My Contact</h3>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ListContact;
