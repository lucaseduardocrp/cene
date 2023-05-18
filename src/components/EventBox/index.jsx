import { Link } from 'react-router-dom';
import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export default function EventBox({src, name}) {
  return (
    <Container>
     <img src={src} alt="Imagem do Evento" />
      <h4>{name}</h4>
      <Link to={"/participate"} className='btn btn2'>Fazer Inscrição</Link>
    </Container>
  );
}
