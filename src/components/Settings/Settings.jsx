import React, { useState } from 'react';
import './Settings.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../Input';
import Option from '../Option';
import ApplyButton from '../Apply-button';
import {
  updateSettings,
  updateRepositoryName,
  updateBuildCommand,
  updateMainBranch,
  updateOption,
} from '../../store/features';

export default function Settings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const repositoryName = useSelector(
    (state) => state.customer.settings.repositoryName
  );
  const buildCommand = useSelector(
    (state) => state.customer.settings.buildCommand
  );
  const mainBranch = useSelector((state) => state.customer.settings.mainBranch);
  const option = useSelector((state) => state.customer.settings.option);

  const [isError, setIsError] = useState(false);

  const onSave = () => {
    if (buildCommand === '' || repositoryName === '') {
      setIsError(true);
      return;
    }
    setIsError(false);
    const newSettings = {
      repositoryName,
      buildCommand,
      mainBranch: mainBranch || 'master',
      option: option || 10,
    };
    localStorage.setItem('settings', JSON.stringify(newSettings));
    dispatch(updateSettings(newSettings));
    history.push('/');
  };

  const onCancel = () => {
    history.push('/');
  };

  return (
    <div className="settings">
      <div className="settings__information">
        <div className="settings__title">Settings</div>
        <div className="settings__description">
          Configure repository connection and synchronization settings.
        </div>
      </div>
      <Input
        title={'GitHub repository'}
        isRequire={true}
        setter={updateRepositoryName}
        value={repositoryName}
        placeholder={'user-name/repo-name'}
      />
      <Input
        title={'Build command'}
        isRequire={true}
        setter={updateBuildCommand}
        value={buildCommand}
        placeholder={'Example: npm ci && npm run build'}
      />
      <Input
        title={'Main branch'}
        isRequire={false}
        setter={updateMainBranch}
        value={mainBranch}
        placeholder={'Example: master'}
      />
      <Option
        unitText={'minutes'}
        setter={updateOption}
        value={option}
        condition={'Synchronize every'}
      />
      {isError ? <div>Заполните все поля</div> : ''}
      <div className="settings__buttons">
        <ApplyButton eventEmitter={onSave} text={'Save'} />
        <ApplyButton
          eventEmitter={onCancel}
          text={'Cancel'}
          styleType={'pale'}
        />
      </div>
    </div>
  );
}
