import styled, { css } from 'styled-components';

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.section`
  ${flex}
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: center;
  background: url(https://uploads-ssl.webflow.com/61679982311ac4e10a284921/61679982311ac45b8d284967_Grain_Latest.png);

  h4{
    font-size: var(--h4-font);
  }

  h2{
    font-size: var(--h2-font);
    font-weight: 500;
    color: var(--primary);
  }

  >p{
    font-size: var(--sm-font);
    line-height: 1.6;
  }

  .donateGrid{
    margin-top: 2rem;
    ${flex}
    gap: 4rem;
    flex-wrap: wrap;
  } 
`;