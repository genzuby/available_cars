import React from 'react';
import { COLOR } from '../../style/constant';

const footerStyle = {
  height: '80px',
  fontSize: '14px',
  color: COLOR.DARK_GRAY,
  borderTop: `2px solid ${COLOR.LIGHT_GRAY}`,
};

function Footer() {
  return (
    <footer
      className="container-fluid d-flex justify-content-center  align-items-center fixed-bottom p-4"
      style={footerStyle}
    >
      © AUTO1 Group 2018
    </footer>
  );
}

export default Footer;
