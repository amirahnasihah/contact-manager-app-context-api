import React from "react";
import CardContact from "./CardContact";

const ListContact = ({ contacts }) => {
  const renderContactList = contacts.map((contact) => {
    return <CardContact contact={contact} key={contact.id} />;
  });

  return (
    <div>
      <h3>List of My Contact</h3>
      <div>{renderContactList}</div>
    </div>
  );
};

export default ListContact;
