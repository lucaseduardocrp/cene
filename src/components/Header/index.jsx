import { useState } from 'react';
import { HeaderContainer } from './styles';
import { FaUser } from 'react-icons/fa';
import { InstagramIcon, FacebookIcon, SpotifyIcon, MobileMenu } from '../Icons/index';
import { Link } from 'react-router-dom';

export default function Header(){
  
  // BugerMenu function
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
            <li><a href='https://www.instagram.com/ministeriocene/' target='_blank' rel='noreferrer'><InstagramIcon /> </a></li>
            <li><a href='https://www.facebook.com/ministeriocenesg/' target='_blank' rel='noreferrer'><FacebookIcon /> </a></li>
            <li><a href='https://open.spotify.com/playlist/1OSYvI34v3kQZSQTWQc5xa' target='_blank' rel='noreferrer'><SpotifyIcon /> </a></li>
          </ul>

          <div className='burgerMenu' onClick={ToggleMode}>
            <MobileMenu />
          </div>
          
          <ul className={active ? "navlinks Open" : "navlinks Close"}>
            <li><Link to="/content">Conteúdo</Link></li>
            <li><Link to="/participate">Participe</Link></li>
            <li><Link to="/donate">Doe</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><button className='btn'><FaUser />Login</button></li>
          </ul>
        </nav>
    </HeaderContainer>
  )
}