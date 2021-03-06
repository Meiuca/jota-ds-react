import React, { useState } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function RadioButton({
  name = '',
  listData = [
    {
      label: 'Label A',
      value: 'A',
      checked: false,
      disabled: false,
    }
  ],
  onColor = false,
  handleChange,
}) {
  function findChecked() {
    return listData.findIndex(el => el.checked);
  }

  const [checkedOpt, setCheckedOpt] = useState(findChecked);

  const _handleChange = (index, disabled) => {
    if(disabled) return

    setCheckedOpt(index);
    if (typeof handleChange === 'function') {
      handleChange(listData[index]);
    }
  }

  const _handleKeyUp = (e, index, disabled) => {
    if(e.code === 'Enter' || e.code === 'Space'){
      if(disabled) return

      setCheckedOpt(index);
      if (typeof handleChange === 'function') {
        handleChange(listData[index]);
      }
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Radiobutton`} styles={style} role="radiogroup">
      {listData.map((item, index) => (
        <label
          key={index}
          className={`
            ${namespace}-Radiobutton-label
            ${item.disabled ? `${namespace}-Radiobutton-label--disabled` : ''}
            ${onColor ? `${namespace}-Radiobutton-label--onColor` : ''}
          `}
          htmlFor={name}
          aria-checked={item.checked}
          onClick={() => _handleChange(index, item.disabled)}
          onKeyUp={e => _handleKeyUp(e, index, item.disabled)}
        >
          <input
            className={`${namespace}-Radiobutton`}
            type="radio"
            id={name}
            name={name}
            checked={checkedOpt === index}
            disabled={item.disabled}
            value={item.value}
            onChange={() => _handleChange(index, item.disabled)}
          />

          {item.label}
        </label>
      ))}
    </ContextElement>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string,
  listData: PropTypes.array,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default RadioButton;