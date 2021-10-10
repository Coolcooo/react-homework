import React from 'react';
import './Input.scss';

const requireField = <div className="require">*</div>;
export default function Input({
  title,
  placeholder,
  isRequire,
  setter,
  value,
}) {
  const clearInput = () => {
    setter('');
  };
  const onInput = (e) => {
    setter(e.target.value);
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
