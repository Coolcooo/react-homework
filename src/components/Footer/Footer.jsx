import React from 'react';
import './Footer.scss';
import FooterButton from '../Footer-button';
import License from '../License';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__buttons">
          <FooterButton text={'Support'} />
          <FooterButton text={'Learning'} />
          <FooterButton text={'Русская версия'} />
        </div>
        <License />
      </div>
    </footer>
  );
}
