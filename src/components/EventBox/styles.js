import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.8rem;
  box-shadow: 0 0 8px #000;
  border-radius: 1.6rem;

  img{
    width: 28rem;
    border-radius: 1rem;
  }

  h4{
    font-size: var(--h4-font);
    font-weight: 500;
  }
`;
