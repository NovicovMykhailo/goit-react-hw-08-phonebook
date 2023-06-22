import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';
import { useState } from 'react';

const LoginForm = () => {

    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className={css.container}>
      <div className={css.form}>
        <header>Login</header>
        <form autoComplete="off">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
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
