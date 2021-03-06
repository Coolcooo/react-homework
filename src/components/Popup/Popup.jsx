import React, { useState } from 'react';
import './Popup.scss';
import Input from '../Input';
import ApplyButton from '../Apply-button';

export default function Popup({ title, eventEmitter, isError, setIsError }) {
  const [hash, setHash] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(false);
  const runFail = (e) => {
    setIsError(isError + 1);
    setIsDisableButton(true);
    setTimeout(() => {
      if (isError + 1 !== 4) {
        eventEmitter(e);
      } else {
        setIsError(0);
      }
      setIsDisableButton(false);
    }, 1000);
  };
  return (
    <>
      <div className="popup">
        <div className="popup__title">{title}</div>
        <Input
          placeholder={'Commit hash'}
          title={'Enter the commit hash which you want to build.'}
          value={hash}
          setter={setHash}
        />
        <div className={`error error_${isError !== 4 ? 'off' : 'on'}`}>
          Упс, что - то пошло не так
        </div>
        <div className="popup__buttons">
          <ApplyButton
            eventEmitter={hash ? runFail : () => {}}
            text={'Run build'}
            styleType={isDisableButton ? 'disabled' : 'bright'}
          />
          <ApplyButton
            eventEmitter={eventEmitter}
            text={'Cancel'}
            styleType={isDisableButton ? 'disabled' : 'white'}
          />
        </div>
      </div>
      <div className="popup-background" />
    </>
  );
}
