
import Title from "components/Description/Title";
import LoginForm from "components/LoginForm/LoginForm";
import css from './BGAnimation.module.css'



const LoginPage = () => {
  return (
    <div className={css.bgAnimated}>
      <Title />
      <LoginForm />
    </div>
  );
};
export default LoginPage;
