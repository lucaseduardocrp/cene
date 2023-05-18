import styled from 'styled-components';

export const Container = styled.div`
  height: 36%;
  padding: 9rem 2rem;
  background: var(--black);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10rem;

  ul{
    line-height: 3;
    
    p{
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
      font-size: var(--sm-font);
      font-weight: 500;
      color: var(--white);

      &:hover{
        color: var(--primary);
      }
    }
  }
`;