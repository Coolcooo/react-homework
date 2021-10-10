import React from 'react';
import './Build-field.scss';

export default function BuildField({
  hash,
  userName,
  commitMessage,
  date,
  time,
  branch,
  typeOfResult,
  currentId
}) {
  return (
    <div className="build-field">
      <div className={'build-field__left-block'}>
        <div
          className={`build-field__status build-field__status_${typeOfResult}`}
        />
        <div className="build-field__commit-info">
          <div className="build-field__description-info">
            <div className={`build-field__id build-field__id_${typeOfResult}`}>
              #{currentId}
            </div>
            <div className="build-field__title">{commitMessage}</div>
          </div>
          <div className="build-field__technical-info">
            <div className="build-field__branch-info">
              <div className="build-field__branch-icon" />
              <div className="build-field__branch">{branch}</div>
              <div className="build-field__hash">{hash}</div>
            </div>
            <div className="build-field__author-info">
              <div className="build-field__author-icon" />
              <div className="build-field__author">{userName}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="build-field__meta-info">
        <div className="build-field__meta-field">
          <div className="meta-field__icon meta-field__icon_date" />
          <div className="meta-field__description">{date}</div>
        </div>
        <div className="build-field__meta-field">
          <div className="meta-field__icon meta-field__icon_time" />
          <div className="meta-field__description">{time}</div>
        </div>
      </div>
    </div>
  );
}
