import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url(https://uploads-ssl.webflow.com/61679982311ac4e10a284921/61679982311ac45b8d284967_Grain_Latest.png);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h2{
    font-size: var(--h2-font);
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .contentBox{
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border: 2px solid var(--grey);
    border-radius: 1rem;

    a{
      color: var(--primary);
    }

    img{
      max-width: 200px;
      object-fit: cover;
    }
  }
`;