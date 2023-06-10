import css from './App.module.css';
// import { useState, useEffect } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import Section from './Section/Section';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';


export function App() {
  //selectors
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()


  const changeFilter = e => {

    dispatch(setFilter(e.currentTarget.value));
  };

  const normalizeFilter = filter.toLowerCase();
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div className={css.app}>
      <Section title={'Phonebook'} type={'h1'}>
        <PhoneBookForm />
      </Section>
      <Section title={'Contacts'} type={'h2'}>
        <Filter onChange={changeFilter} filterValue={filter} />
      </Section>
      <Section>
        <ContactList list={foundContacts} />
      </Section>
    </div>
  );
}
