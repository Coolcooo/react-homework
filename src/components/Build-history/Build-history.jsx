import React from 'react';
import './Build-history.scss';
import ApplyButton from '../Apply-button';
import BuildField from '../Build-field/Build-field';

export default function BuildHistory({ repositoryName }) {
  const repositories = {
    'philip1967/my-awesome-repo': [
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'done',
      },
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'wait',
      },
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'error',
      },
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'done',
      },
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'wait',
      },
      {
        hash: '9c9f0b9',
        userName: 'Vladimir Privezenov',
        commitMessage: 'hello World',
        date: '21 янв, 03:06',
        time: '1 ч 20 мин',
        branch: 'master',
        type: 'error',
      },
    ],
  };
  if (!repositories[repositoryName]) {
    repositories[repositoryName] = [];
  }
  const historyFields = repositories[repositoryName].map((fieldInfo, idx) => (
    <BuildField
      key={idx}
      hash={fieldInfo.hash}
      userName={fieldInfo.userName}
      commitMessage={fieldInfo.commitMessage}
      date={fieldInfo.date}
      time={fieldInfo.time}
      branch={fieldInfo.branch}
      typeOfResult={fieldInfo.type}
      currentId={idx + 1}
    />
  ));
  // eslint-disable-next-line no-console
  console.log(historyFields);
  return (
    <div className="build">
      <div className="build__wrapper">
        <div className="build__history-block">{historyFields.reverse()}</div>
        <ApplyButton text={'Show more'} styleType={'pale'} />
      </div>
    </div>
  );
}
