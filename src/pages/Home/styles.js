import styled, { css } from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div`
  height: 90vh;
  background-color: var(--black);
  ${flex}
  flex-direction: column;
  
  img{
    width: 60rem;
    object-fit: cover;

    @media (max-width: 1140px){
      width: 36rem;
    }
  }

  img:nth-child(2){
    margin-left: 0.4rem;
    width: 10rem;
    object-fit: cover;
  }
`;

export const EncontroRadical = styled.section`
  height: 90vh;
  background: var(--black);
  text-align: center;
  ${flex}
  gap: 10rem;
  flex-wrap: wrap;

  img{
    width: 42rem;
    object-fit: cover;
  }

  .radical-subscribe{
    ${flex}
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;

    h3{
      font-size: var(--h3-font);
      color: var(--white);
    }
    h4{
      font-size: var(--h4-font);
      color: var(--white);
    }
  }

  @media (max-width: 450px){
    gap: 0;

    img{
      width: 32rem;
    }
  }
`;

export const Container = styled.section`
  ${flex}
  flex-direction: column;
  gap: 3rem;
  padding: 8rem 2rem;
  text-align: center;
`;

export const Main = styled.main`
  h2{
    padding: 2rem 0;
    font-size: var(--h2-font);
    color: var(--primary);
  }

  p{
    padding: 2rem 0;
    line-height: 1.4;
    font-size: var(--p-font);
    color: var(--grey);
  }
  
  .about{
    text-align: center;
    
    img{
      margin-top: 2rem;
      max-width: 100%;
    }
  }
`;

const parallax = css`
  ${flex}
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  h2{
    color: var(--white);
  }
  
  p{
    color: var(--white);
  }
  `;

export const ParallaxImage = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/LeituraIMG.jpg);
  ${parallax}
  `;

export const ParallaxImage2 = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/ContribuiçaoBG.jpg);
  ${parallax}
  
  h2{
    color: var(--primary);
  }
  `;

export const HeartIcon = styled(AiFillHeart)`
  width: 6rem;
  height: 6rem;
  fill: var(--primary);
  `;

export const ScheduleGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;
`;
