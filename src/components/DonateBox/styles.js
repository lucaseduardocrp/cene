import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  min-height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  p, a{
    font-size: var(--p-font);
    line-height: 1.4;
    padding: 0 2rem;
  }

  a{
    text-decoration: underline;
    color: var(--primary);
    font-weight: 700;
  }

  img{
    max-width: 300px;
    object-fit: cover;
  }
`;