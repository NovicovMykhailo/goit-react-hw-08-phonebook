import css from './App.module.css';
import { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
const shortid = require('shortid');

export function App() {
  // states

  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('PhoneList')) ?? [];
  });

  useEffect(() => {
    localStorage.setItem('PhoneList', JSON.stringify(contacts));
  }, [contacts]);

  // other Functions

  const removeContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const addContact = data => {
    const contact = { id: shortid.generate(), ...data };

    if (contacts.find(o => o.name.toLowerCase() === data.name.toLowerCase())) {
      return alert(`<< ${data.name} >> is already in contacts`);
    } else {
      setContacts(prev => [contact, ...prev]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div className={css.app}>
      <Section title={'Phonebook'} type={'h1'}>
        <PhoneBookForm onSubmit={addContact} />
      </Section>
      <Section title={'Contacts'} type={'h2'}>
        <Filter onChange={changeFilter} filterValue={filter} />
      </Section>
      <Section>
        <ContactList list={foundContacts} removeCard={removeContact} />
      </Section>
    </div>
  );
}
