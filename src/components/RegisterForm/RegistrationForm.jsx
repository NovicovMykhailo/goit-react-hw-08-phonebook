import { Link, useNavigate } from 'react-router-dom';
import css from './RegistrationForm.module.css';
import { useState } from 'react';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/', { replace: true });
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <header>Signup</header>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={css.text}
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            required
          />
          <input
            type="email"
            name="email"
            className={css.text}
            placeholder="Enter your email"
            onChange={handleChange}
            value={formData.email}
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            required
          />
          <input
            type="pasword"
            name="password"
            className={css.password}
            placeholder="Create a password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <button type="submit" className={css.button}>
            Signup
          </button>
        </form>
        <div className={css.signup}>
          <span className={css.signup}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
