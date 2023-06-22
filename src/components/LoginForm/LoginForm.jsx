import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
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
