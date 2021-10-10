import React from 'react';
import { useHistory } from 'react-router-dom';
import './Start-screen.scss';
import ApplyButton from '../Apply-button';

export default function StartScreen() {
  const history = useHistory();
  const openSettings = () => {
    history.push('/settings');
  };
  return (
    <div className="start-screen">
      <div className="hello-screen">
        <div className="hello-screen__settings-icon" />
        <div className="hello-screen__description">
          Configure repository connection
          <br /> and synchronization settings
        </div>
        <div className="button-wrapper">
          <ApplyButton text={'Open settings'} eventEmitter={openSettings} />
        </div>
      </div>
    </div>
  );
}
