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

  p:nth-child(3){
    color: var(--primary);
    font-weight: 700;
  }

  a{
    color: var(--primary);
    text-decoration: underline;
    font-weight: 700;
  }

  img{
    max-width: 300px;
    object-fit: cover;
  }
`;

// eslint-disable-next-line react/prop-types
export default function DonateGrid({src, text, payment, href, textLink}){
  return(
    <Container>
      <img src={src} alt="Forma de Contribuição" />
      <p>{text}</p>
      <p>{payment}</p>
      <a href={href} target="_blank" rel="noreferrer"> {textLink} </a>
    </Container>
  )
}