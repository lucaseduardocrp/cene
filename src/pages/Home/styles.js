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
    width: 5rem;
    padding: 0.8rem;
    object-fit: cover;
    border: 1px solid var(--white);
    border-radius: 50%;
    animation: arrowAnimation 1s infinite;
  }

  @keyframes arrowAnimation {
    from {
      transform: translateY(-6px);
    }
    to {
      transform: translateY(6px);
    }
  }

`;

export const EncontroRadical = styled.section`
  height: 80vh;
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
    gap: 3rem;

    h3{
      font-size: var(--h3-font);
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

  .scheduleBox{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
    margin-bottom: 4rem;
    
    img{
      width: 30rem;
      border-radius: 2rem;
    }
  }
`;

const parallax = css`
  ${flex}
  width: 100%;
  height: 65vh;
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

