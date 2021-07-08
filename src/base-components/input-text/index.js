import React, { useRef, useState } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function InputText({
  id = `${namespace}-input`,
  label = "Label",
  helperText = "Helper text",
  placeholder = "Input Default",
  maxLength = 50,
  error = false,
  onColor = false,
  disabled = false,
  showHelper = false,
  handleChange,
  handleFocus
}){
  const [_value, setValue] = useState("");
  const [_keyboardFocus, setKeyboardFocus] = useState(false);
  const refInput = useRef(null);

  const _handleFocus = (e) => {
    handleFocus(e);
  }

  const _handleChange = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    handleChange(currentValue);
  }

  const _handleBlur = (e) => {
    setKeyboardFocus(false);
  }

  const inputFocus = () => {
    refInput.current.focus();
  }

  const handleKeyBoardEvents = (e) => {
      if (e.code === 'Tab') {
        setKeyboardFocus(true);
        inputFocus();
      }
  }

  return (
    <ContextElement contextId={`${namespace}-InputText`} styles={style}>
      <div
        className={`
          ${namespace}-InputText
          ${error ? `${namespace}-InputText--error` : '' }
          ${onColor ? `${namespace}-InputText--onColor` : '' }
          ${disabled ? `${namespace}-InputText--disabled` : '' }
          ${_keyboardFocus ? `${namespace}-InputText--focus` : '' }
        `} onKeyUp={(e) => handleKeyBoardEvents(e)}
      >
        <label className={`${namespace}-InputText__label`} htmlFor={id}>{label}</label>
        <input ref={refInput} className={`${namespace}-InputText__input`} id={id} value={_value} maxLength={maxLength} placeholder={placeholder} onInput={_handleChange} onBlur={_handleBlur} onFocus={_handleFocus} maxLength={maxLength}></input>
        <div className={`${namespace}-InputText__helperBox`}>
          <span aria-hidden={!showHelper} className={`${namespace}-InputText__helperText ${showHelper ? 'visible':''}`}>{helperText}</span>
        </div>
      </div>
    </ContextElement>
  )
}

InputText.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  disabled: PropTypes.bool,
  showHelper: PropTypes.bool,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
};

export default InputText;