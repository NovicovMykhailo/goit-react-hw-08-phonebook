// import Description from "components/Description/Description";
import Title from "components/Description/Title";
import LoginForm from "components/LoginForm/LoginForm";


const LoginPage = () => {
  return (
    <div style={styles.container}>
      <Title/>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(120deg,#2980b9, #8e44ad)',
    overflow: 'hidden',
  },
};
