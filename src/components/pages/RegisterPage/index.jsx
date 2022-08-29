import React from 'react';
import { useNavigate } from "react-router-dom";
import RegisterForm from '../../forms/RegisterForm';
import { AppContext } from '../../../storage/context';
import { postRegister } from '../../../api/services/Auth';
import {
  K3P,
  TOKEN,
  PATHS,
} from '../../../utils/constants';
import background from '../../../assets/images/backgrounds/vault-locked.webp';
import './index.scss';

const RegisterPage = () => {
  const dispatch = React.useContext(AppContext)[1];

  const navigate = useNavigate();
  const localToken = localStorage.getItem(TOKEN) || '';

  const register = async (values, { setSubmitting }) => {
    const registerData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    try {
      await postRegister(registerData);
    } catch (err) {
      console.error(err);
      dispatch({
        type: 'setError',
        error: err,
      });
    }

    setSubmitting(false);
  };

  React.useEffect(() => {
    if (localToken) {
      navigate(PATHS.landing);
    }
  }, [navigate, localToken]);

  return (
    <div className="register-page">
      <div className="register-page__background-container">
        <img className="register-page__background" src={background} alt="vault-locked" />
      </div>
      <div className="register-page__container">
        <h3 className="register-page__welcome">Welcome to K3P!</h3>
        <div className="register-page__title">
          <h1 className="register-page__title-back">{K3P}</h1>
        </div>
        <div className="register-page__descriptions">
          <p className="register-page__description">KeePass Plus Plus</p>
          <p className="register-page__description">Your online password manager</p>
        </div>
        <RegisterForm onSubmit={register} />
      </div>
    </div>
  );
};

export default RegisterPage;
