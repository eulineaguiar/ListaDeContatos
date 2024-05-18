import React from 'react';

function Contact({ contact, removeContact, editContact }) {
  return (
    <div className="contact">
      <h3>{contact.name}</h3>
      <p>Telefone: {contact.phone}</p>
      <p>E-mail: {contact.email}</p>
      <button className="edit" onClick={() => editContact(contact)}>Editar</button>
      <button className="remove" onClick={() => removeContact(contact.id)}>Remover</button>
    </div>
  );
}

export default Contact;
