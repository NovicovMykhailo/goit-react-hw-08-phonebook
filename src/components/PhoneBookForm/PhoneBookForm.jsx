import { useDispatch, useSelector } from 'react-redux';
import css from './PhoneBookForm.module.css';
import formatPhoneNumber from './utils';

import { useState } from 'react';
import { addContact } from 'redux/contactsSlice';

export default function PhoneBookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const onInputValue = e => {
    if (e.target.name === 'number') {
      setNumber(formatPhoneNumber(e.target.value));
    } else {
      setName(e.target.value);
    }
  };

  const clearingField = e => {
    if (e.key === 'Backspace') {
      setNumber({ number: '' });
    }
  };

  const handlerOnSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(o => o.name.toLowerCase() === name.toLowerCase())
    ) {
      return alert(`<< ${name} >> is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      reset();
    }

    // if (contacts.find(o => o.name.toLowerCase() === data.name.toLowerCase())) {
    //   return alert(`<< ${data.name} >> is already in contacts`);
    // } else {

    // }

    // props.onSubmit({ name, number });
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form action="" className={css.form} onSubmit={handlerOnSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="[A-Za-z ]{1,32}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputValue}
          onClick={clearingField}
        />
      </label>
      <label>
        Telephone
        <input
          type="tel"
          name="number"
          pattern="[789][0-9]{9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="(NNN) NNN NN NN"
          value={number}
          onChange={onInputValue}
          onKeyDown={clearingField}
        />
      </label>
      <button type="submit" className={css.addContact}>
        Add Contact
      </button>
    </form>
  );
}
