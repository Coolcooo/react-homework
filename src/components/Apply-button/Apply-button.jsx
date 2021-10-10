import React from 'react';
import './Apply-button.scss';

export default function ApplyButton({ text, styleType, eventEmitter }) {
  let style;
  switch (styleType) {
    case 'pale':
      style = 'apply-button_pale';
      break;
    case 'white':
      style = 'apply-button_white';
      break;
    case 'disabled':
      style = 'apply-button_disabled';
      break;
    case 'bright':
    default:
      style = 'apply-button_bright';
      break;
  }
  return (
    <button onClick={eventEmitter} className={`apply-button ${style}`}>
      {text}
    </button>
  );
}
