import Title from "components/Description/Title";
import RegistrationForm from "components/RegisterForm/RegistrationForm";
import css from './BGAnimation.module.css';


const RegisterPage = () => {
  return (
    <div className={css.bgAnimated}>
      <Title />
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
