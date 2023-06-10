import css from './App.module.css';
// import { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// const shortid = require('shortid');
import Section from './Section/Section';
import { useSelector } from 'react-redux';
// import { addContact, deleteContact } from 'redux';
export function App() {
  //selectors
  const contacts = useSelector(state => state.contacts);


  // other Functions

  // const removeContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };


  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const normalizeFilter = filter.toLowerCase();
  // const foundContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizeFilter)
  // );

  return (
    <div className={css.app}>
      <Section title={'Phonebook'} type={'h1'}>
        <PhoneBookForm />
      </Section>
      {/* <Section title={'Contacts'} type={'h2'}>
        <Filter onChange={changeFilter} filterValue={filter} />
      </Section> */}
      <Section>
        {/* <ContactList list={foundContacts}  /> */}
        <ContactList list={contacts} />
      </Section>
    </div>
  );
}
