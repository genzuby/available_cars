import React from 'react';
import { Nav } from 'react-bootstrap';
import useMedia from '../../hooks/useMedia';
import {
  LOGOIMG,
  navStyle,
  TEXT_BTN,
  ACTION_ICON,
} from '../../style/componentStyle';
import { COLOR, ICON_IMG } from '../../style/constant';

function Header() {
  const [mediaType] = useMedia();

  return (
    <Nav
      className="container-fluid fixed-top d-flex justify-content-between align-items-center"
      style={navStyle}
      data-testid="header"
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
      <Nav.Item style={{ position: 'relative', paddingRight: '24px' }}>
        <Nav.Link href="/favorites">
          <ACTION_ICON
            size={mediaType === 'desktop' ? '20px' : '30px'}
            right="-5%"
            top={mediaType === 'desktop' ? '-20%' : '-200%'}
            bgImg={ICON_IMG.FAVORITE_NORMAL}
            hoverImg={ICON_IMG.FAVORITE_HOVER}
          />
          {mediaType === 'desktop' && (
            <TEXT_BTN color={COLOR.DARK_GRAY} fontSize="18px">
              My Favorites
            </TEXT_BTN>
          )}
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
