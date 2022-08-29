import React from 'react';
import * as classnames from 'classnames';
import './index.scss';

const InputTextField = (props) => {
    const {
      label,
      name,
      value,
      onChange,
      placeholder = '',
      isRequired,
      type = 'text',
      className,
      error,
      disabled,
      readOnly,
      ...rest
    } = props;
  
    let inputType = 'text';
    if (type === 'password') {
      inputType = 'password';
    }
  
    if (type === 'number') {
      inputType = 'number';
    }
  
    return (
      <div className={classnames('input-text-field', className)}>
        <div className="input-text-field__header">
          {label && (
            <label
              htmlFor={name}
              className={classnames(
                'input-text-field__label',
                error && 'input-text-field__label-error'
              )}
            >
              {!!isRequired && <span className="input-text-field__star">*</span>}
              {label}
            </label>
          )}
  
          {error && <div className="input-text-field__error-text">{error}</div>}
        </div>
        <div className="input-text-field__input-wrapper">
          <input
            type={inputType}
            className={classnames(
              'input-text-field__input',
              error && 'input-text-field__input-error',
              readOnly && 'input-text-field__input-read-only',
              type === 'password' && 'input-text-field__input-password'
            )}
            name={name}
            value={value}
            id={name}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
          />
        </div>
      </div>
    );
};

export default InputTextField;
