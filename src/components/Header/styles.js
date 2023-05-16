import { styled } from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
height: 7vh;
background: var(--black);

nav, .navlinks, .socialMedia{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

nav{
  padding: 0.8rem 3rem;
  background: var(--black);

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
      height: 50%;
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
`;