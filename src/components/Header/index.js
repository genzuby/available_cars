import React from 'react';
import { Nav } from 'react-bootstrap';
import { LOGOIMG, navStyle, TEXT_BTN } from '../../style/componentStyle';
import { COLOR } from '../../style/constant';

function Header() {
  return (
    <Nav
      className="container-fluid fixed-top d-flex justify-content-between align-items-center"
      style={navStyle}
    >
      <Nav.Item>
        <Nav.Link href="/">
          <LOGOIMG
            className="align-self-center"
            src="/assets/logo.png"
            alt="Logo"
          />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/favorites">
          <TEXT_BTN color={COLOR.DARK_GRAY} fontSize="18px">
            My Favorites
          </TEXT_BTN>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
