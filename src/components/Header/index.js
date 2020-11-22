import React from 'react';
import { Nav } from 'react-bootstrap';
import { LOGOIMG, navStyle } from '../../style/componentStyle';

function Header() {
  return (
    <Nav className="container-fluid fixed-top" style={navStyle}>
      <Nav.Item>
        <Nav.Link className="d-flex" href="/home">
          <LOGOIMG
            className="align-self-center"
            src="/assets/logo.png"
            alt="Logo"
          />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
