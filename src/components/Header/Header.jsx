import React, { useState } from 'react';
import './Header.scss';
import { useHistory } from 'react-router-dom';
import SettingsButton from '../Settings-button';
import Popup from '../Popup';

export default function Header({ option, settings }) {
  const [isPopup, setIsPopup] = useState();
  const history = useHistory();
  const options = {};
  const [isError, setIsError] = useState(1);

  const closePopup = () => {
    setIsPopup(false);
  };
  switch (option) {
    case 'settings':
      options.headerTitleColor = 'muted';
      options.headerTitle = 'School CI server';
      options.buttons = [];
      break;
    case 'build':
      options.headerTitleColor = 'black';
      options.headerTitle = settings.repositoryName;
      options.buttons = [
        {
          text: 'Run build',
          icon: 'play',
          isFullButton: true,
          eventEmitter: () => {
            setIsPopup(true);
          },
        },
        {
          text: '',
          icon: 'cog',
          isFullButton: false,
          url: '/settings',
        },
      ];
      break;
    case 'start':
      options.headerTitleColor = 'muted';
      options.headerTitle = 'School CI server';
      options.buttons = [
        {
          text: 'Settings',
          icon: 'cog',
          isFullButton: true,
          url: '/settings',
        },
      ];
      break;
    default:
      break;
  }

  const buttons = options.buttons.map((button) => {
    const onCLickLink = (e) => {
      if (button.url) {
        history.push(button.url);
      }
      if (button.eventEmitter) {
        button.eventEmitter(e);
      }
    };
    return (
      <SettingsButton
        key={button.text}
        text={button.text}
        icon={button.icon}
        isFullButton={button.isFullButton}
        eventEmitter={onCLickLink}
      />
    );
  });
  return (
    <header className="header">
      <div className="header__controls">
        <h1 className={`header__logo header__logo_${options.headerTitleColor}`}>
          {options.headerTitle}
        </h1>
        <div className={`header__buttons`}>{buttons}</div>
      </div>
      {isPopup && (
        <Popup
          isError={isError}
          setIsError={setIsError}
          eventEmitter={closePopup}
          title={'New build'}
        />
      )}
    </header>
  );
}
