import React from 'react';
import './Option.scss';

export default function Option({ unitText, condition, value, setter }) {
  const onChange = (e) => {
    if (e.target.value !== '') {
      const newValue = parseFloat(e.target.value);
      if (!Number.isNaN(newValue) && newValue > 0) {
        setter(newValue);
      }
    } else {
      setter('');
    }
  };
  return (
    <div className="option">
      {condition}{' '}
      <input
        value={value}
        type="text"
        onChange={onChange}
        className="option__input"
      />{' '}
      {unitText}
    </div>
  );
}
