import css from './ContactCard.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; //Redux
import { deleteContact } from 'redux/operations';


export default function ContactCard({ name, number, id, delay }) {
  //redux
  const dispatch = useDispatch();

  const handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    dispatch(deleteContact(currentId)); //Redux
  };


  return (
    <li className={css.cardItem} title={name} data-id={id} data-aos="fade-up">
      <button type="button" className={css.button} onClick={handleDeleteCard}></button>
      <p className={css.contact}>
        Name : <span className={css.value}>{name}</span>
      </p>
      <p className={css.contact}>
        Number : <span className={css.value}>{number}</span>
      </p>
    </li>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
