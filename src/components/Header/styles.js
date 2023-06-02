import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--black);

  nav, .navlinks, .socialMedia{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  
  nav{
    padding: 0.5rem 5rem;

    .navlinks{
      gap: 3rem;
    }
  
    .burgerMenu{
      display: none;
    }
    
    ul li a{
      color: var(--white);
      font-size: var(--p-font);
      font-weight: 600;
      transition: all .20s ease;
  
      &:hover{
        color: var(--primary);
      }
    }
  }
  
  @media (max-width: 768px){
    nav{
      padding: 0.8rem 1rem ;
      
      .Open, .Close{
        width: 100%;
        height: 30vh;
        padding: 3rem;
        flex-direction: column;
        position: absolute;
        top: 7.5rem;
        left: 0;
        background: var(--black);
      }
      .Close{
        display: none;
      }
  
      .burgerMenu{
        display: block;
      }
    }
  }
`;