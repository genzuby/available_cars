import { createGlobalStyle } from 'styled-components';
import { COLOR } from './constant';

const GlobalStyle = createGlobalStyle`
  body , html{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color : ${COLOR.DARK_GRAY}
  }
  
  a{
    text-decoration : none !important;
    color : ${COLOR.DARK_GRAY}
  }
`;

export default GlobalStyle;
