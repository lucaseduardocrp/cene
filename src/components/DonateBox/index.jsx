import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export default function DonateGrid({src, text, payment, href, textLink}){
  return(
    <Container>
      <img src={src} alt="Forma de Contribuição" />
      <p>{text}</p>
      <p><span>{payment}</span></p>
      <a href={href}> {textLink} </a>
    </Container>
  )
}