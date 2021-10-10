import React, { useState } from 'react';
import './Popup.scss';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import ApplyButton from '../Apply-button';
import { updateErrorInBuild, updatePopup } from '../../store/features';

export default function Popup({ title }) {
  const [hash, setHash] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(false);
  const errorCount = useSelector((state) => state.customer.errorInBuild);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(updatePopup(false));
  };
  const runFail = () => {
    dispatch(updateErrorInBuild());
    setIsDisableButton(true);
    setTimeout(() => {
      if (errorCount + 1 !== 4) {
        closePopup();
      } else {
        dispatch(updateErrorInBuild(0));
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
          isNotDispatch={true}
        />
        <div className={`error error_${errorCount !== 4 ? 'off' : 'on'}`}>
          Упс, что - то пошло не так
        </div>
        <div className="popup__buttons">
          <ApplyButton
            eventEmitter={hash ? runFail : () => {}}
            text={'Run build'}
            styleType={isDisableButton ? 'disabled' : 'bright'}
          />
          <ApplyButton
            eventEmitter={closePopup}
            text={'Cancel'}
            styleType={isDisableButton ? 'disabled' : 'white'}
          />
        </div>
      </div>
      <div className="popup-background" />
    </>
  );
}
