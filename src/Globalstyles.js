import { createGlobalStyle } from "styled-components";
import Serif from "./fonts/aga.otf";
import Normal from "./fonts/oy.otf";

//mostly css reset and custom fonts

export default createGlobalStyle`

  @font-face {
      font-family: Canter;
      src: url(${Serif});
    }

  @font-face {
    font-family: PasCanter;
    src: url(${Normal});
  }


  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    
  }
  
  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, 
  text, textarea {
    font-family: Poppins;
    
  }

  html, body {
    width: 100vw;
    overflow-x: hidden;
    
  }

  h1, h2, h3, h4, h5, p, button {
    /* animation: fadeIn 0.2s forwards; Apply the fade-in animation */
    /* animation-delay: 700ms;
    opacity: 0; */
    /* @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */
  }

  

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  
`;
