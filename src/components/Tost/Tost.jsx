import { useEffect, useState } from 'react';
import css from './Tost.module.css';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';

const Tost = ({ message }) => {
  const [showTost, setShowTost] = useState(true);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    setTimeout(() => {
      setShowTost(false);
      errorMessage = ''
    }, 3000);
  }, []);

  return (
    showTost && (
      <div className={css.tost} onClick={() => setShowTost(false)}>
        <h3 className={css.title}>Info</h3>
        <p className={css.text}>{message}</p>
      </div>
    )
  );
};

export default Tost;
