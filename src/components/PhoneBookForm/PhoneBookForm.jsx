import { useState } from 'react';
import css from './PhoneBookForm.module.css';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux'; //redux
import { toast } from 'react-hot-toast';

export default function PhoneBookForm({ onClick }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //redux
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerOnSubmit = e => {
    e.preventDefault();
    if (contacts.find(o => o.name.toLowerCase() === name.toLowerCase())) {
      return alert(`<< ${name} >> is already in contacts`);
    } else {
      //redux
      dispatch(addContact({ name, number })).then(e => {
        e.error ? toast.error(`${e.payload}`) : toast.success('Woohoo! You succseccfully added a contact');
      });
      reset();
      onClick();
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <div className={css.container}>
      <header>Create a new contact</header>
      <button className={css.closeBtn} onClick={onClick} />
      <form className={css.form} onSubmit={handlerOnSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Telephone
          <input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can not contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button type="submit" className={css.addContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
}
