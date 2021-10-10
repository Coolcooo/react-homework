import React, { useState } from 'react';
import './Settings.scss';
import { useHistory } from 'react-router-dom';
import Input from '../Input';
import Option from '../Option';
import ApplyButton from '../Apply-button';

export default function Settings({ changeSettings }) {
  const history = useHistory();
  const savedSettings = JSON.parse(localStorage.getItem('settings')) || {};
  const [repositoryName, setRepositoryName] = useState(
    savedSettings.repositoryName || ''
  );
  const [buildCommand, setBuildCommand] = useState(
    savedSettings.buildCommand || ''
  );
  const [mainBranch, setMainBranch] = useState(savedSettings.mainBranch || '');
  const [option, setOption] = useState(savedSettings.option || 10);
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
    changeSettings(newSettings);
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
        setter={setRepositoryName}
        value={repositoryName}
        placeholder={'user-name/repo-name'}
      />
      <Input
        title={'Build command'}
        isRequire={true}
        setter={setBuildCommand}
        value={buildCommand}
        placeholder={'Example: npm ci && npm run build'}
      />
      <Input
        title={'Main branch'}
        isRequire={false}
        setter={setMainBranch}
        value={mainBranch}
        placeholder={'Example: master'}
      />
      <Option
        unitText={'minutes'}
        setter={setOption}
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
