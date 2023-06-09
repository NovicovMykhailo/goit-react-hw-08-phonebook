import css from './ContactCard.module.css';
import PropTypes from 'prop-types';

export default function ContactCard({ name, number, id, deleteCard }) {
  const handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    deleteCard(currentId);
  };

  return (
    <li className={css.cardItem} title={name} data-id={id}>
      <button
        type="button"
        className={css.button}
        onClick={handleDeleteCard}
      ></button>
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
