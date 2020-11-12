import React, { } from 'react';
import { Link  } from 'react-router-dom';

import * as Routes from '../../routes';

import './Footer.scss';

const Footer = ({children}) => {
  return (
    <footer className="app-footer">
      <div className="container footer">
        <div>
          <p>Made by Jaimy Van Gyseghem</p>
        </div>
        <div>
          <a href="">Algemene voorwaarde </a>
          <a href="">Privacy Policy </a>
          <a href="">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
