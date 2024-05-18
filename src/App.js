import React, { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setCurrentContact(null);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setCurrentContact(contact);
  };

  return (
    <div className="App">
      <h1>Lista de Contatos</h1>
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        currentContact={currentContact}
      />
      <ContactList
        contacts={contacts}
        removeContact={removeContact}
        editContact={editContact}
      />
    </div>
  );
}

export default App;
