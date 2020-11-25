import styled from 'styled-components';
import { COLOR, SIZE } from './constant';

const {
  LIGHT_GRAY,
  BTN_COLOR,
  DARK_GRAY,
  MAIN_ORANGE,
  DARK_ORANGE,
  MAIN_BGCOLOR,
} = COLOR;

export const mainStyle = {
  margin: '80px 0',
  padding: '24px 48px 0 24px',
  display: 'grid',
  minHeight: '76vh',
  minWidth: `${SIZE.MIN_BODY_WIDTH}`,
};

export const detailStyle = {
  margin: '80px 0 24px 0',
  width: '100%',
  minHeight: '82vh',
  display: 'grid',
  justifyContent: 'center',
  minWidth: `${SIZE.MIN_BODY_WIDTH}`,
};

export const detailMobileStyle = {
  padding: '0 6em',
};

export const flexStyle = {
  display: 'flex',
  flexGrow: 1,
};
export const flexColumnStyle = {
  ...flexStyle,
  flexDirection: 'column',
};

export const flexRowStyle = {
  ...flexStyle,
  flexDirection: 'row',
};

export const footerStyle = {
  height: '80px',
  fontSize: '16px',
  color: DARK_GRAY,
  borderTop: `2px solid ${LIGHT_GRAY}`,
  minWidth: `${SIZE.MIN_BODY_WIDTH}`,
};

export const navStyle = {
  height: '80px',
  borderBottom: `2px solid ${LIGHT_GRAY}`,
  backgroundColor: MAIN_BGCOLOR,
  fontSize: '20px',
  minWidth: `${SIZE.MIN_BODY_WIDTH}`,
};

export const LOGOIMG = styled.img`
  width: ${props => props.width || `73%`};
  height: auto;
  padding: 8px 24px;
`;

export const BUTTON = styled.button`
  width: ${props => props.width || '168px'};
  height: ${props => props.width || '38px'};
  font-size: 16px;
  color: ${BTN_COLOR};
  outline: 0 !important;
  border: none;
  border-radius: 2px;
  margin-top: 24px;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${props => props.bgColor || MAIN_ORANGE};

  &:hover {
    background-color: ${props => props.hoverColor || DARK_ORANGE};
  }
`;

export const TEXT_BTN_NORMAL = styled.div`
  color: ${props => props.color || MAIN_ORANGE};
  font-size: ${props => props.fontSize || `16px`};
  cursor: pointer;
`;

export const TEXT_BTN = styled.div`
  color: ${props => props.color || MAIN_ORANGE};
  font-size: ${props => props.fontSize || `16px`};
  cursor: pointer;
  position: relative;
  display: inline;
  padding: 4px 0;

  &:after {
    content: '';
    display: block;
    height: 2px;
    bottom: 0;
    left: 50%;
    position: absolute;
    background: ${props => props.color || MAIN_ORANGE};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const LIST_CONTENT = styled.div`
  margin: 24px 24px 24px 48px;
  width: 100%;

  .--list-title {
    font-weight: bold;
    font-size: 24px;
  }

  .--list-desc {
    font-size: 26px;
  }
`;

export const LIST_ITEM = styled.div`
  margin: 0;
  padding: 12px 24px;
  width: 100%;
  &:hover,
  &:active {
    color: #ffffff;
    background-color: ${MAIN_ORANGE};
  }
`;

export const cardStyle = {
  marginBottom: '8px',
  width: '100%',
  position: 'relative',
};

export const cardTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

export const CARD_WRAPPER = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

export const CARD_IMG = styled.img`
  width: ${props => props.width};
  height: auto;
  padding: 12px;
  margin-right: 24px;
  border: 1px solid ${LIGHT_GRAY};
`;

export const inputGroupStyle = {
  border: `2px solid ${LIGHT_GRAY}`,
  padding: '24px',
  margin: '24px',
  display: 'flex',
};

export const dropdownlistStyle = {
  width: '100%',
  position: 'absolute',
  zIndex: 2,
  backgroundColor: '#fff',
  cursor: 'pointer',
  left: 0,
  top: '48px',
};

export const DROPDOWN_BTN = styled.button`
  width: 100%;
  height: 48px;
  text-align: left;
  background-color: ${MAIN_BGCOLOR};
  color: ${DARK_GRAY};
  border: 2px solid ${LIGHT_GRAY};
  border-radius: 2px;
  outline: 0 !important;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 8px;
    align-self: center;
  }
  .--dropdown-arrow {
    background: url('/assets/dropdown.svg') no-repeat;
    height: 24px;
    width: 24px;
  }
`;

export const DROPDOWN_WRAPPER = styled.div`
  position: relative;
  width: 100%;
`;

export const BTN_WRAPPER = styled.div`
  display: flex;
  width: 100%;
  padding: 0 12px;
  justify-content: ${props => props.justifyContent};
`;

export const OPTION_WRAPPER = styled.div`
  padding: 8px 12px;
  margin-bottom: 8px;
  width: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  font-size: 18px;
`;

export const LABEL = styled.p`
  margin: 8px 0;
  font-size: 18px;
`;

export const PAGINATAION_WRAPPER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding-top: 24px;
  text-align: center;
`;

export const PAGINATION_TEXT = styled.p`
  font-size: 16px;
  padding: 12px 24px 0 24px;
`;

export const PAGINATION_BTN = styled.button`
  color: ${MAIN_ORANGE};
  font-size: 16px;
  padding: 0 24px;
  cursor: pointer;
  border: none;
  background: ${MAIN_BGCOLOR};
  outline: 0 !important;

  &:disabled {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const HERO = styled.div`
  background-color: ${LIGHT_GRAY};
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 44vh;
  min-width: ${SIZE.MIN_BODY_WIDTH};
`;

export const DETAIL_INFO_GROUP = styled.div`
  display: flex;
  width: 100%;
  padding: 0 18%;
  justify-self: center;
  position: relative;
`;

export const DETAIL_INFO = styled.div`
  flex-grow: 1;
  margin-top: 48px;
  h3,
  p {
    padding-top: 12px;
    word-break: keep-all;
  }

  h1 {
    font-weight: bold;
  }

  p {
    font-size: 18px;
  }
`;

export const DETAIL_INFO_SUB = styled.div`
  width: '100%';
  padding: 24px;
  display: flex;
`;

export const ACTION_ICON = styled.span`
  position: absolute;
  background: url(${props => props.bgImg}) no-repeat;
  background-size: contain;
  right: ${props => props.right || 0};
  top: ${props => props.top || 0};
  margin: 24px;
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  cursor: pointer;

  &:hover {
    background: url(${props => props.hoverImg}) no-repeat;
  }
`;

export const PADDING = styled.div`
  height: ${props => props.height || `24px`};
  width: ${props => props.width || `24px`};
`;

export const ACCENT_TEXT = styled.p`
  font-size: ${props => props.fontSize || '24px'};
  color: ${props => props.color || DARK_GRAY};
  font-weight : ${props => props.fontWeight || 'normal'}

  &:hover {
    color: ${props => (props.hover ? DARK_ORANGE : DARK_GRAY)};
  }
`;
