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

  body{
    padding-top: 7rem;
  }

  *, input{
    border: 0;
    background: none;
  }

  section{
    width: 100%;
    height: auto;
    padding: 7rem;
  }

  span{
    color: #F2D335;
    font-weight: 700;
  }
  
  :root{
    --primary: #0BB1BC;
    --secundary: #009AED;
    --black: #000;
    --grey: #929292;
    --white: #ffffff;

    --h1-font: 16rem;
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

  .link{
    display: flex;
    align-items: center;
    font-size: var(--sm-font);
    font-weight: 500;
    color: var(--grey);
    text-decoration: underline;
  }

  .btn{
    width: 14rem;
    padding: 0.8rem;
    color: var(--white);
    display: flex;
    justify-content: center;
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 1.4rem;
    font-size: var(--sm-font);
    font-weight: 700;
    cursor: pointer;
    transition: all .20s ease;

    &:hover{
      background: var(--black);
      color: var(--primary);
    }
  }

  .btn2{
    color: var(--black);
    background-color: #F2D335;
    border-color: #F2D335;
    
    &:hover{
      color: #F2D335;
    }
  }

  @media (max-width: 768px){
    :root{
      --h2-font: 4rem;
      --h3-font: 3rem;
      --h4-font: 2.4rem;
      --p-font: 1.6rem;
      --sm-font: 1.4rem;
    }
    section{
      padding: 2rem 1rem;
    }
  }
`; 