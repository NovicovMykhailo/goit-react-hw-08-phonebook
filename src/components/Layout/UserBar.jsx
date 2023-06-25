import Button from 'components/Button/Button';
import avatar from '../../assets/avatar.jpg';
import arrowIcon from '../../assets/arrow.png';

import css from './UserBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';


const UserBar = () => {
  const userEmail = useSelector(selectUser);


  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOut());
  }

  return (
    <div className={css.container}>
      <h3 className={css.userName}>{userEmail}</h3>
      <img src={avatar} alt="avatar" width="100" className={css.icon} title={`${userEmail}`} />
      <Button onClick={handleLogout}>
       <span className={css.textOnBtn}>Logout</span>
        <img src={arrowIcon} alt="Arrow" width="20" className={css.imageIcon} style={{}} />
      </Button>
    </div>
  );
};
export default UserBar;
