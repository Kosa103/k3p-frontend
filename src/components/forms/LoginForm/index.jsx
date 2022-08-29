import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { LOGIN_SCHEMA } from '../../../utils/validationSchemas';
import { PATHS } from '../../../utils/constants';
import InputTextField from '../../common/ui/InputTextField';
import Button from '../../common/ui/Buttons/Button';

const LoginForm = (props) => {
  const { onSubmit } = props;

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOGIN_SCHEMA}
      onSubmit={(values, formikBag) => onSubmit(values, formikBag)}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
        <form className="login-page__form" onSubmit={handleSubmit}>
          <InputTextField
            className="login-page__form-input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <InputTextField
            className="login-page__form-input"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            error={touched.password && errors.password}
          />

          <div className="login-page__buttons">
            <Button
              className='login-page__button'
              label="Login"
              type='submit'
              onSubmit={handleSubmit}
              disabled={isSubmitting && !Object.keys(errors)?.length}
            />
            <Button
              className='register-page__button'
              label="To Register"
              handleClick={() => navigate(PATHS.register)}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
