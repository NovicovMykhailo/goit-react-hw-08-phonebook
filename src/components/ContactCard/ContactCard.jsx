import css from './ContactCard.module.css';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux'; //Redux
import { Link } from 'react-router-dom';
import { deleteContact } from 'redux/operations';

////https://www.callfire.com/api-documentation/rest/version/1.1

export default function ContactCard({ name, number, id }) {
  //redux
  const dispatch = useDispatch();

  const handleDeleteCard = e => {
    let currentId = e.currentTarget.parentNode.dataset.id;
    dispatch(deleteContact(currentId)).then(e => {
      e.error ? toast.error(`${e.payload}`) : toast.success('Contact deleted');
    }); //Redux
  };



  return (
    <li className={css.cardItem} title={`${name}:  ${number}`} data-id={id} data-aos="fade-up" >
 
        <button type="button" className={css.button} onClick={handleDeleteCard}></button>
        <p className={css.contact}>
          Name : <span className={css.value}>{name}</span>
        </p>
        <p className={css.contact}>
          Number :<span className={css.value}>{formatPhoneNumber(number)}</span>
        </p>
 
    </li>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

 export const formatPhoneNumber = phone => {
   var cleaned = ('' + phone).replace(/\D/g, '');
   var match = cleaned.match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/);
   if (match) {
     var intlCode = match[1] ? `+${match[1]} ` : '';
     return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
   }
   return phone;
 };
