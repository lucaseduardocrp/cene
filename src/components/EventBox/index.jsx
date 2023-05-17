import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export default function EventBox({src, name}) {
  return (
    <Container>
     <img src={src} alt="Imagem do Evento" />
      <h4>{name}</h4>
      <a href="" className='btn btn2'>Fazer Inscrição</a>
    </Container>
  );
}
