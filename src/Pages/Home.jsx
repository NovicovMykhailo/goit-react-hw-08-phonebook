import Layout from 'components/Layout/Layout';
import PhoneBookForm from 'components/PhoneBookForm/PhoneBookForm';
import Loader from 'components/Loader/Loader';
import Tost from 'components/Tost/Tost';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Home.module.css'
//redux
import { fetchAll } from 'redux/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from '../redux/selectors';

import { useSelector, useDispatch } from 'react-redux'; //redux
import { setFilter } from 'redux/filterSlice'; //redux
import { useEffect } from 'react';


export function Home() {
  //Redux selectors
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filter = useSelector(selectFilter);
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
    <div className={css.container}>
      <Layout>
        <PhoneBookForm />
        <Filter onChange={changeFilter} filterValue={filter} />
        {isLoading && !error && <Loader />}
        {error && <Tost message={error} />}
        <ContactList list={foundContacts.reverse()} />
      </Layout>
    </div>
  );
}

export default Home;
