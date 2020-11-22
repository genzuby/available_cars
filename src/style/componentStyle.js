import styled from 'styled-components';
import { COLOR } from './constant';

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
};

export const detailStyle = {
  margin: '80px 0',
  display: 'grid',
};

export const footerStyle = {
  height: '80px',
  fontSize: '16px',
  color: DARK_GRAY,
  borderTop: `2px solid ${LIGHT_GRAY}`,
};

export const navStyle = {
  height: '80px',
  borderBottom: `2px solid ${LIGHT_GRAY}`,
  backgroundColor: MAIN_BGCOLOR,
};

export const LOGOIMG = styled.img`
  width: 73%;
  height: auto;
  padding: 8px 24px;
`;

const btnStyle = {
  width: '168px',
  height: '38px',
  fontSize: '16px',
  color: BTN_COLOR,
  outline: '0 !important',
  border: 'none',
  borderRadius: '2px',
  marginTop: '24px',
  letterSpacing: '1px',
  cursor: 'pointer',
};

export const btnNoremalStyle = {
  ...btnStyle,
  backgroundColor: MAIN_ORANGE,
};

export const btnPressedStyle = {
  ...btnStyle,
  backgroundColor: DARK_ORANGE,
};

export const TEXT_BTN = styled.div`
  color: ${MAIN_ORANGE};
  font-size: 16px;
  cursor: pointer;
  position: relative;
  width: 100px;

  &:after {
    content: '';
    display: block;
    height: 2px;
    bottom: 0;
    left: 40%;
    position: absolute;
    background: ${MAIN_ORANGE};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 90%;
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

export const cardStyle = {
  marginBottom: '8px',
  width: '100%',
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
  margin-top: 24px;
  padding-top: 24px;
  text-align: center;
`;

export const PAGINATION_TEXT = styled.p`
  font-size: 16px;
  padding: 0 24px;
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
  height: 50vh;
`;

export const DETAIL_INFO_GROUP = styled.div`
  display: flex;
  margin: 24px 10rem;
`;

export const DETAIL_INFO = styled.div`
  flex-grow: 1;
  margin: 24px 24px 0 24px;
  h3,
  p {
    padding-top: 12px;
  }

  h1 {
    font-weight: bold;
  }

  p {
    font-size: 18px;
  }
`;

export const DETAIL_INFO_SUB = styled.div`
  max-width: 500px;
  margin: 0 24px;
  padding: 24px;
`;
