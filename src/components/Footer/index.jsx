import { ContactIcon, LocationIcon, PhoneIcon } from '../Icons';
import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  padding: 5rem 2rem;
  background: var(--black);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10rem;

  ul{
    line-height: 3;
    
    p, a{
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

export function Footer() {
  return (
    <Container>
      <ul>
        <li>
          <a 
            href="https://www.google.com/maps/place/R.+Frei+Orlando,+16+-+Mutondo,+S%C3%A3o+Gon%C3%A7alo+-+RJ,+24452-150/@-22.8173003,-43.0184532,3a,75y,98.96h,87.92t/  data=!3m6!1e1!3m4!1slaEOjZxot0gmCFCL0WQcjA!2e0!7i16384!8i8192!4m7!3m6!1s0x999082c0b6b843:0x105725fcd8ba2ce8!8m2!3d-22.8173413!4d-43.0181613!10e5!16s%2Fg%2F11j8svvn1r?entry=ttu"
            target='_blank' rel='noreferrer'         
          >
            <LocationIcon /> Rua Frei Orlando 16 - Mutondo - SG
          </a>
        </li>
        <li><p><ContactIcon />contato@gmail.com</p></li>
        <li>
          <a 
            href='https://api.whatsapp.com/send/?phone=5521970293107&text&type=phone_number&app_absent=0'
            target='_blank' rel='noreferrer'
          >
            <PhoneIcon /> +55 (21) 97029-3107
          </a>
        </li>
        <li><p>© 2023, Comunidade Evangélica Novo Encontro. Todos os direitos reservados.</p></li>
      </ul>
      <a href="#home"><img src="/Logo.svg" alt='Logo Ministério Cene' /></a>
    </Container>
  );
}
