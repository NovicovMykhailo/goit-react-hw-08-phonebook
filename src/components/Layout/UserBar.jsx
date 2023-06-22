import Button from 'components/Button/Button';
import avatar from '../../assets/avatar.jpg';
import arrowIcon from '../../assets/arrow.png';
import { useNavigate } from 'react-router-dom';

import css from'./UserBar.module.css'




const UserBar = ({ name = 'UserName' }) => {
  const navigate = useNavigate()
  
  function handleLogout() {
    navigate('/login');

  }
  return (
    <div className={css.container}>
      <h3 className={css.userName}>Hello, {name}</h3>
      <img
        src={avatar}
        alt="avatar"
        width="100"
        className={css.icon}
      />

      <Button name={'Logout'} onClick={handleLogout}>
        <img
          src={arrowIcon}
          alt="Arrow"
          width="20"
          className={css.imageIcon}
          style={{  }}
        />
      </Button>
    </div>
  );
};
export default UserBar;

