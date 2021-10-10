import React from 'react';
import './Settings-button.scss';

export default function SettingsButton({ text, icon, isFullButton, eventEmitter }) {
  return (
    <button onClick={eventEmitter} className={`settings-button settings-button_pale`}>
      <div
        className={`settings-button__settings-icon settings-button__settings-icon_${icon}`}
      />
      <div
        className={`settings-button__settings-description ${
          !isFullButton && 'settings-button__settings-description_none'
        }`}
      >
        {text}
      </div>
    </button>
  );
}
