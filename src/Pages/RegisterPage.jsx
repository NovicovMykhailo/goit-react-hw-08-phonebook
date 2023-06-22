import RegistrationForm from "components/RegisterForm/RegistrationForm";


const RegisterPage = () => {
  return (
    <div style={styles.container}>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(120deg,#2980b9, #8e44ad)',
    overflow: 'hidden',
  },
};
