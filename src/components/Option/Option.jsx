import React from 'react';
import './Option.scss';
import { useDispatch } from 'react-redux';

export default function Option({ unitText, condition, value, setter }) {
  const dispatch = useDispatch();
  const onChange = (e) => {
    if (e.target.value !== '') {
      const newValue = parseFloat(e.target.value);
      if (!Number.isNaN(newValue) && newValue > 0) {
        dispatch(setter(newValue));
      }
    } else {
      dispatch(setter(''));
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
