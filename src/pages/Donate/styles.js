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
  height: 100vh;
  text-align: center;

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
    gap: 8rem;
    flex-wrap: wrap;
  } 
`;