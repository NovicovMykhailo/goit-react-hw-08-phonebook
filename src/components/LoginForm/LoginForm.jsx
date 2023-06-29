import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Description from 'components/Description/Description';
import ButtonInfo from 'components/ButtonInfo/ButtonInfo';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showInfo, setIsShowInfo] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function resetForm() {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(formData)).then(e => {
      e.error ? toast.error(`${e.payload}`) : toast.success('Hooray, You are signed in');
    });

    resetForm();
  };

  return (
    <div className={css.container}>
      <ButtonInfo
        onClick={() => {
          setIsShowInfo(prev => !prev);
        }}
      />
      <div className={css.form}>
        {showInfo ? (
          <Description />
        ) : (
          <>
            <header>Login</header>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                value={formData.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                value={formData.password}
              />
              <button type="sumbit" className={css.button}>
                Login
              </button>
            </form>
            <div className={css.signup}>
              <span className={css.signup}>
                Don't have an account?
                <Link to="/register"> Signup</Link>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default LoginForm;
