import React from 'react';
import './Input.scss';
import { useDispatch } from 'react-redux';

const requireField = <div className="require">*</div>;
export default function Input({
  title,
  placeholder,
  isRequire,
  setter,
  value,
  isNotDispatch,
}) {
  const dispatch = useDispatch();
  const clearInput = () => {
    if (isNotDispatch) {
      setter('');
    } else {
      dispatch(setter(''));
    }
  };
  const onInput = (e) => {
    if (isNotDispatch) {
      setter(e.target.value);
    } else {
      dispatch(setter(e.target.value));
    }
  };

  const isEmptyInput = value.length === 0;
  const resetButton = <div onClick={clearInput} className="input__reset" />;

  return (
    <div className="input">
      <div className="input__title">
        {title} {isRequire ? requireField : ''}
      </div>
      <div className="input__wrapper">
        <input
          type={'text'}
          onChange={onInput}
          value={value}
          className="input__field"
          placeholder={placeholder}
        />
        {!isEmptyInput && resetButton}
      </div>
    </div>
  );
}
