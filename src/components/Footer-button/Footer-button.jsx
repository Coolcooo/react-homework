import React from 'react';
import './Footer-button.scss';

export default function FooterButton({ text }) {
  return (
    <a className={'footer-button'} href={`#${text}`}>
      {text}
    </a>
  );
}
