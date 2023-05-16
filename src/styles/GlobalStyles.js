import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  html{
    min-height: 100%;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  *, input{
    border: 0;
    background: none;
  }
  
  :root{
    --primary: #0BB1BC;
    --secundary: #009AED;
    --black: #000;
    --grey: #929292;
    --white: #ffffff;

    --h1-font: 4rem;
    --h2-font: 6rem;
    --h3-font: 3.4rem;
    --h4-font: 2.4rem;
    --p-font: 1.8rem;
    --sm-font: 1.5rem;
    --xsm-font: 1.4rem;
  }

  /*------SCROLLBAR DESIGN------*/

  ::-webkit-scrollbar{
      width: 5px;
  }
  ::-webkit-scrollbar-thumb{
      background: var(--primary);
      border-radius: 30px;
  }
  ::-webkit-scrollbar-track{
      background: #000;
  }

  /*------TEXT SELECTION DESIGN------*/

  ::selection {
      background-color: var(--primary);
      color: var(--black);
  }

  /*------Utility Classes------*/

  .btn{
    display: flex;
    gap: 0.6rem;
    padding: 0.8rem 2.4rem;
    background: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 1.4rem;
    font-size: var(--sm-font);
    font-weight: 700;
    color: var(--black);
    cursor: pointer;
    transition: all .30s ease;

    &:hover{
      background: transparent;
      color: var(--primary);
    }
  }

  .btn2{
    padding: 0.8rem 3rem;
    color: var(--white);

    &:hover{
      background: var(--black);
    }
  }
`; 