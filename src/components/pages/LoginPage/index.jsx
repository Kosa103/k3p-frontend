import React from 'react';
import { useNavigate } from "react-router-dom";
import LoginForm from '../../forms/LoginForm';
import { AppContext } from '../../../storage/context';
import { postLogin } from '../../../api/services/Auth';
import {
  K3P,
  USERNAME,
  TOKEN,
  USER,
  TWO_WEEKS_MS,
  EXP_DATE,
  PATHS,
} from '../../../utils/constants';
import background from '../../../assets/images/backgrounds/vault-locked.webp';
import './index.scss';

const LoginPage = () => {
  const dispatch = React.useContext(AppContext)[1];

  const navigate = useNavigate();
  const localToken = localStorage.getItem(TOKEN) || '';

  const login = async (values, { setSubmitting }) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
      const { jwt, user } = await postLogin(loginData);
  
      if (jwt && user) {
        dispatch({
          type: 'setToken',
          token: jwt,
        });
        dispatch({ type: 'nullError', error: {} });
        localStorage.setItem(TOKEN, jwt);
        const expDate = new Date(Date.now() + TWO_WEEKS_MS).toISOString();
        localStorage.setItem(EXP_DATE, expDate);
        localStorage.setItem(USERNAME, loginData.name);
        dispatch({
          type: 'setUser',
          user
        });
        localStorage.setItem(USER, JSON.stringify(user));
        navigate(PATHS.landing);
      }
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
    <div className="login-page">
      <div className="login-page__background-container">
        <img className="login-page__background" src={background} alt="vault-locked" />
      </div>
      <div className="login-page__container">
        <h3 className="login-page__welcome">Welcome to K3P!</h3>
        <div className="login-page__title">
          <h1 className="login-page__title-back">{K3P}</h1>
        </div>
        <div className="login-page__descriptions">
          <p className="login-page__description">KeePass Plus Plus</p>
          <p className="login-page__description">Your online password manager</p>
        </div>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  );
};

export default LoginPage;
