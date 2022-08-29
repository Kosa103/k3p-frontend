import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { REGISTER_SCHEMA } from '../../../utils/validationSchemas';
import { PATHS } from '../../../utils/constants';
import InputTextField from '../../common/ui/InputTextField';
import Button from '../../common/ui/Buttons/Button';

const RegisterForm = (props) => {
  const { onSubmit } = props;

  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={REGISTER_SCHEMA}
      onSubmit={(values, formikBag) => onSubmit(values, formikBag)}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
        <form className="register-page__form" onSubmit={handleSubmit}>
          <InputTextField
            className="register-page__form-input"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
          />
          <InputTextField
            className="register-page__form-input"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
          />
          <InputTextField
            className="register-page__form-input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <InputTextField
            className="register-page__form-input"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            error={touched.password && errors.password}
          />

          <div className="register-page__buttons">
            <Button
              className='register-page__button'
              label="Register"
              type='submit'
              onSubmit={handleSubmit}
              disabled={isSubmitting && !Object.keys(errors)?.length}
            />
            <Button
              className='register-page__button'
              label="To Login"
              handleClick={() => navigate(PATHS.login)}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
