import React from 'react';
import Contact from './Contact';

function ContactList({ contacts, removeContact, editContact }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>Nenhum contato adicionado.</p>
      ) : (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={removeContact}
            editContact={editContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
