import Button from 'components/Button/Button';
import avatar from '../../assets/avatar.jpg';
import arrowIcon from '../../assets/arrow.png';
import { useNavigate } from 'react-router-dom';




const UserBar = ({ name = 'UserName' }) => {
  const navigate = useNavigate()
  function handleLogout() {
    navigate('/login');

  }
  return (
    <div style={styles.container}>
      <h3>Hello, {name}</h3>
      <img
        src={avatar}
        alt="avatar"
        width="100"
        style={styles.icon}
      />

      <Button name={'Logout'} onClick={handleLogout}>
        <img
          src={arrowIcon}
          alt="Arrow"
          width="20"
          style={{ mixBlendMode: 'multiply' }}
        />
      </Button>
    </div>
  );
};
export default UserBar;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    borderRadius: '50%',
    height: 42,
    width: 42,
    border:'1px solid gray'
  },
};
