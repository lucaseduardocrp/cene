import { ContactIcon, LocationIcon, PhoneIcon } from '../Icons';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <ul>
        <li><p><LocationIcon /> Rua Frei Orlando 16 - Mutondo - SG</p></li>
        <li><p><ContactIcon />contato@gmail.com</p></li>
        <li><p><PhoneIcon /> +55 (21) 94002-8922</p></li>
        <li><p>© 2023, Comunidade Evangélica Novo Encontro. Todos os direitos reservados.</p></li>
      </ul>
      <img src="/Logo.svg" />
    </Container>
  );
}
