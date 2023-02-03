import { createContext, useContext, useState } from "react";
import api from "../api/contacts.js";
import { v4 as uuidv4 } from "uuid";

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // GET DATA Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
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

  // SEARCH FUNCTION
  const handleSearch = (searchTerm) => {
    // console.log("handleSearch", searchTerm);
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        // console.log(Object.values(contact.join("")));
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  // CONTEXT VALUES
  const value = {
    contacts,
    retrieveContacts,
    deleteContact,
    addContactHandler,
    updateContactHandler,
    handleSearch,
    searchTerm,
    searchResults,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
