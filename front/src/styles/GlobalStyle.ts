import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
   
    --color-sand-100: #EFC89A;
    --color-sand-light-200: #F4E8C8;
    --color-white-300: #FFFFFF;
    --color-sand-light-300:#FFF7D9
    --color-black-400: #000000;

    font-size: 60%;   
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: var(--color-sand-100);
    color: var( --color-black-400);
    -webkit-font-smoothing: antialiased;
 

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inria Serif', serif;
    font-weight: bold;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;