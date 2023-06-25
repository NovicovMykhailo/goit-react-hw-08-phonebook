import css from './ContactCard.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; //Redux
// import { Link } from 'react-router-dom';
import { deleteContact } from 'redux/operations';

////https://www.callfire.com/api-documentation/rest/version/1.1



export default function ContactCard({ name, number, id }) {
  //redux
  const dispatch = useDispatch();

  const handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    dispatch(deleteContact(currentId)); //Redux
  };

  // function makeCall() {
  //   window.open('_link is here_', '_blank');
  //   window.open('tel:+1303499-7111', '_parent');
  // }


  return (
    <li className={css.cardItem} title={`${name}:  ${number}`} data-id={id} data-aos="fade-up">
      {/* <Link to={`tel:${number}`} onClick={makeCall}> */}
        <button type="button" className={css.button} onClick={handleDeleteCard}></button>
        <p className={css.contact}>
          Name : <span className={css.value}>{name}</span>
        </p>
        <p className={css.contact}>
          Number : <span className={css.value}>{number}</span>
        </p>
      {/* </Link> */}
    </li>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
