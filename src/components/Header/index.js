import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { COLOR } from '../../style/constant';

const navStyle = {
  height: '80px',
  borderBottom: `2px solid ${COLOR.LIGHT_GRAY}`,
};

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

const LOGOIMG = styled.img`
  width: 73%;
  height: auto;
  padding: 8px 24px;
`;

export default Header;
