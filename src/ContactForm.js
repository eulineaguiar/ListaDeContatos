import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, updateContact, currentContact }) {
  const [contact, setContact] = useState({
    id: null,
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (currentContact) {
      setContact(currentContact);
    } else {
      setContact({
        id: null,
        name: '',
        phone: '',
        email: ''
      });
    }
  }, [currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      updateContact(contact);
    } else {
      addContact({ ...contact, id: Date.now() });
    }
    setContact({ id: null, name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Telefone"
        required
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="E-mail"
        required
      />
      <button type="submit">
        {contact.id ? 'Atualizar Contato' : 'Adicionar Contato'}
      </button>
    </form>
  );
}

export default ContactForm;
