import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className={css.page}>
      <div className={css.container}>
        <h2>Ooops, page not found...</h2>
        <div>
          <p>Click the button if you want to go to the home page</p>
          <button type="button" onClick={onClick} className={css.goBackBtn}>
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
