// @flow
import React from 'react';
import type { Node } from 'react';
import { footerStyle } from '../../style/componentStyle';

function Footer(): Node {
  return (
    <footer
      className="container-fluid d-flex justify-content-center  align-items-center p-4"
      style={footerStyle}
      data-testid="footer"
    >
      © AUTO1 Group 2018
    </footer>
  );
}

export default Footer;
