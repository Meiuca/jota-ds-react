import React, { useState, useEffect } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import classMap from '@jota-ds/context-element-react/directives/class-map';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Select({ errorMsg = 'error', options = [], ...props }) {
  const [_open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <ContextElement contextId={`${namespace}-Select`} styles={style}>
      <div
        className={classMap({
          [`${namespace}-Select`]: true,
          [`${namespace}-Select--onColor`]: props.onColor,
          [`${namespace}-Select--focus`]: focus,
          [`${namespace}-Select--error`]: props.error,
          [`${namespace}-Select--onColor--error`]: props.onColor && props.error,
        })}
      >
      <label
          className={classMap({
            [`${namespace}-Select__label`]: true,
            [`${namespace}-Select__label--disabled`]: props.disabled,
          })}
          htmlFor={`${namespace}-select-${props.name}`}
        >
          {props.label}
      </label>
      <select
          className={classMap({
            [`${namespace}-Select__tag`]: true,
            [`${namespace}-Select__tag--error`]: props.error,
          })}
          disabled={props.disabled}
          aria-disabled={props.disabled}
          id={props.id}
          name={props.id}
        >
          {options.map((item, index) => (
            <option key={index} value={item} aria-label={item} className={`${namespace}-Select__option`}>
              {item}
            </option>
          ))}
      </select>
      <Icon
          icon={_open ? 'chevron-up' : 'chevron-down'}
          className={classMap({
            [`${namespace}-Select__icon`]: true,
            [`${namespace}-Select__icon--error`]: props.error,
            [`${namespace}-Select__icon--disabled`]: props.disabled,
          })}
        ></Icon>
        <span aria-hidden={!props.error} className={`${namespace}-Select__errorMsg`}>
          {errorMsg}
        </span>
    </div>

    </ContextElement>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
};

export default Select;
