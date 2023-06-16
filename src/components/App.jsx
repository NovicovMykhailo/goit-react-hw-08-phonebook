import css from './App.module.css';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchAll } from 'redux/operations';
import {
  getContacts,
  getIsLoading,
  getError,
} from '../redux/selectors';

import Section from './Section/Section';
import { useSelector, useDispatch } from 'react-redux'; //redux
import { setFilter } from 'redux/filterSlice'; //redux
import { useEffect } from 'react';
import Loader from './Loader/Loader';
import Tost from './Tost/Tost';

export function App() {
  //Redux selectors
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value)); //redux
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
        {isLoading && !error && <Loader />}
        {error && <Tost message={error} />}
        <ContactList list={foundContacts.reverse()} />
      </Section>
    </div>
  );
}
