import { styled } from "styled-components";

export const Container = styled.div`
  header{
    position: fixed;
    width: 100%;

    nav, .navlinks, .socialMedia{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }
    
    nav{
      padding: 0.6rem 5rem;
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(30px);
    
      .burgerMenu{
        display: none;
      }
      
      ul li a{
        color: var(--white);
        font-size: var(--sm-font);
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
          height: 40vh;
          padding: 3rem;
          flex-direction: column;
          position: absolute;
          top: 8rem;
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
  }
`;