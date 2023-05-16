import { useState } from 'react';
import { HeaderContainer } from './styles';
import { FaUser } from 'react-icons/fa';
import { InstagramIcon, FacebookIcon, SpotifyIcon, MobileMenu } from '../Icons/index';
import { Link } from 'react-router-dom';

export default function Header(){
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }
  
  return(
    <HeaderContainer>
      <nav>
        <ul className='socialMedia'>
          <li>
            <Link to="/"><img src="../../public/Logo.svg" alt="CENE" /></Link>
          </li>
          <li><a href='#' target='_blank'><InstagramIcon /> </a></li>
          <li><a href='#' target='_blank'><FacebookIcon /> </a></li>
          <li><a href='#' target='_blank'><SpotifyIcon /> </a></li>
        </ul>

        <div className='burgerMenu' onClick={ToggleMode}>
          <MobileMenu />
        </div>

        <ul className={active ? "navlinks Open" : "navlinks Close"}>
          <li><Link to="/conteudo">Conteúdo</Link></li>
          <li><Link to="/participe">Participe</Link></li>
          <li><Link to="/doe">Doe</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><button className='btn'><FaUser />Login</button></li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}