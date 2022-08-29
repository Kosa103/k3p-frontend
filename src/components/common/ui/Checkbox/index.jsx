import React from "react";
import * as classnames from 'classnames';
import './index.scss';

const Checkbox = (props) => {
  const { label, text, name, onChange, error, checked, className, disabled, id, value } = props;

  return (
    <div className={classnames('checkbox', className && className)}>
      <div className="checkbox__error">{error ? error : '\u00A0'}</div>
      <label className={classnames('checkbox__container')} htmlFor={id || name}>
        <input
          id={id || name}
          name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          className="checkbox__input"
        />
        <span
          className={classnames(
            'checkbox__checkmark',
            disabled && 'checkbox__checkmark_disable'
          )}
        />
        <div className="checkbox__text_container">
          <div className="checkbox__label">{label}</div>
          <div className="checkbox__text">{text}</div>
        </div>
      </label>
    </div>
  );
}

export default Checkbox;
