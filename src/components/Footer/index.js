import React from 'react';
import { footerStyle } from '../../style/componentStyle';

function Footer() {
  return (
    <footer
      className="container-fluid d-flex justify-content-center  align-items-center p-4"
      style={footerStyle}
    >
      © AUTO1 Group 2018
    </footer>
  );
}

export default Footer;
