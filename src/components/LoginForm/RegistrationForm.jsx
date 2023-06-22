import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <header>Signup</header>
        <form autocomplete="off">
          <input type={css.text} placeholder="Name" />
          <input type={css.text} placeholder="Enter your email" />
          <input type={css.password} placeholder="Create a password" />
          <input type={css.password} placeholder="Confirm your password" />
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
