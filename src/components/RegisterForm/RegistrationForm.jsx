import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectError } from '../../redux/auth/selectors';
import ButtonInfo from 'components/ButtonInfo/ButtonInfo';
import Description from 'components/Description/Description';

const RegistrationForm = () => {
  const dispatch = useDispatch();
    const [showInfo, setIsShowInfo] = useState(false);
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
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



  const handleSubmit = async e => {
    const { name, password, email, confirmedPassword } = formData;
    e.preventDefault();

    if (confirmedPassword === password) {
      try {
        dispatch(register({ name: name, email: email, password: password })).then(e => {
          e.error ? toast.error(`${e.payload}`) : toast.success('Hooray, You are now registered!')
        });
        resetForm();
        
      } catch (error) {
        toast.error(`Oops, something went wrong ${error.message}`);
      }
    } 
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <ButtonInfo
          onClick={() => {
            setIsShowInfo(prev => !prev);
          }}
        />
        {showInfo ? (
          <Description />
        ) : (
          <>
            <header>Signup</header>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className={css.text}
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="email"
                name="email"
                className={css.text}
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <input
                type="password"
                name="password"
                className={css.password}
                placeholder="Create a password"
                title="password must be at least 8 symbols"
                onChange={handleChange}
                value={formData.password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
              <input
                type="password"
                name="confirmedPassword"
                className={css.password}
                placeholder="Confirm a password"
                onChange={handleChange}
                value={formData.confirmedPassword}
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
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
