import { useEffect, useState } from 'react';
import { HeaderContainer } from './styles';
import { InstagramIcon, FacebookIcon, SpotifyIcon, MobileMenu, CloseMobileMenu } from '../Icons/index';
import { Link } from 'react-router-dom';

export default function Header(){
  
  // BugerMenu function
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active)
  }
 
  // Burger Close with Scroll
  useEffect(() => {
    const handleScroll = () => {
      setMode(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <HeaderContainer>
        <nav>
          <ul className='socialMedia'>
            <li>
              <Link to="/"><img src="/Logo.svg" alt="Logo CENE" /></Link>
            </li>
            <li><a href='https://www.instagram.com/ministeriocene/' target='_blank' rel='noreferrer'><InstagramIcon /> </a></li>
            <li><a href='https://www.facebook.com/ministeriocenesg/' target='_blank' rel='noreferrer'><FacebookIcon /> </a></li>
            <li><a href='https://open.spotify.com/playlist/1OSYvI34v3kQZSQTWQc5xa' target='_blank' rel='noreferrer'><SpotifyIcon /> </a></li>
          </ul>

          <div className='burgerMenu' onClick={toggleMode}>
            {active ? <CloseMobileMenu /> : <MobileMenu />}
          </div>
          
          <ul className={active ? "navlinks Open" : "navlinks Close"}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/content">Conteúdo</Link></li>
            <li><Link to="/donate">Doe</Link></li>
          </ul>
        </nav>
    </HeaderContainer>
  )
}