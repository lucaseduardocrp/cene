import { ContactIcon, LocationIcon, PhoneIcon } from '../Icons';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <ul>
        <li><a href=""><LocationIcon /> Rua Frei Orlando 16 - Mutondo - SG</a></li>
        <li><a href=""><ContactIcon />contato@gmail.com</a></li>
        <li><a href=""><PhoneIcon /> +55 (21) 94002-8922</a></li>
        <li><p>© 2023, Comunidade Evangélica Novo Encontro. Todos os direitos reservados.</p></li>
      </ul>
      <img src="/Logo.svg" />
    </Container>
  );
}
