import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectError } from '../../redux/auth/selectors';

const LoginForm = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
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

  const notify = () => toast.error('Ooops, You are not registered yet');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn(formData)).then(action => {
      if ((action.type = 'auth/login/rejected')) {
        notify()
      }
    });
    resetForm();
  };

  return (
    <div className={css.container}>
      <Toaster />
      <div className={css.form}>
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
      </div>
    </div>
  );
};
export default LoginForm;
