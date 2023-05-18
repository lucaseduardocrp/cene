import styled, { css } from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div`
  height: 60vh;
  background-color: var(--black);
  background-image: url(../../../public/HomeSlide.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Container = styled.section`
  ${flex}
  flex-direction: column;
  gap: 3rem;
  padding: 8rem 0;
  text-align: center;
`;

export const Main = styled.main`
  h2{
    padding: 2rem 0;
    font-size: var(--h2-font);
    color: var(--primary);
  }

  p{
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
  
  .newslatter{
    background: var(--black);

    h4{
      font-size: var(--h4-font);
      font-weight: 500;
      color: var(--white);
    }
  }

  .eventsGrid, .scheduleBox{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
  }

  .scheduleBox{
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
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../../../public/LeituraIMG.jpg);
  ${parallax}
`;

export const ParallaxImage2 = styled.div`
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../../../public/ContribuiçaoBG.jpg);
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

