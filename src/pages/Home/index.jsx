import { Main, Slide, Container, EncontroRadical, ParallaxImage, ParallaxImage2, HeartIcon } from './styles';
import { Link } from 'react-router-dom';

export default function Home(){
  return(
    <Main>
      <Slide id='home'>
        <img src="/HomeSlide.svg" alt="Seja Bem Vindo" />
        <img src="/arrowDown.svg" alt="Arrow Down"/>
      </Slide>
      <EncontroRadical>
        <div className="radical-subscribe">
          <h3>UM NOVO ENCONTRO ME FAZ <br /> <span>AMAR COM O AMOR DE JESUS</span></h3>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSejtzFSdYQoRthkYjL_7IIRRYvRhfft2_EUDx5iormssRS9dg/viewform?fbzx=-4655413755678008778" className='btn btn2'>INSCREVA-SE!</a>
        </div>
        <img src="/radicalLogo.png" alt="Logo Encontro Radical" />
       
      </EncontroRadical>

      <section className='about' id='about'>
        <h2>Sobre nós</h2>
        <p>Nossa missão é estabelecer a cultura dos céus por onde formos. Temos como propósito amar a Deus acima de todas as coisas e ao próximo como a nós mesmos. <br /> 
        Cremos na mudança social e cultural, quando um só povo em unidade se move em busca de manifestar e revelar a Glória de Deus Pai em todas as esferas da sociedade, <br /> 
        trazendo vida ao que estava morto. Afinal, estamos aqui para servir, amar e viver a verdade de Cristo.</p>
        <img src="/SobreCeneBG.jpg" alt="Sobre Cene" />
      </section>


      <ParallaxImage>
        <Container>
          <h2>Plano de Leitura</h2>
          <p>PDF da revista utilizada atualmente na nossa Escola Bíblica Dominical <br /> acesse agora e comece os seus estudos.</p>
          <Link to={"/content"} className='btn'>Acesse Agora</Link>
        </Container>
      </ParallaxImage>

      <Container>
        <h2>Programação</h2>
        <div className='scheduleBox'>
          <img src="/BannerCultoDomingo.jpg" alt="Culto de louvor e adoração aos domingos" />
          <img src="/BannerCultoQuinta.jpg" alt="Culto da vitória as quintas-feiras" />
          <img src="/BannerCultoDomingo.jpg" alt="Escola bíblica e dominical aos domingos de manhã" />
        </div>
      </Container>

      <ParallaxImage2>
        <Container>
            <HeartIcon />
            <h2>Contribuição</h2>
            <p>Ser generoso é colocar o amor em ação. &quot;Mais bem-aventurado é dar do que receber&quot; (At 20.35). <br />
            Conﬁra em quais bancos você pode depositar seus dízimos e suas ofertas.</p>
            <Link to={"/donate"} className='btn'>Contribua Aqui</Link>
        </Container>
      </ParallaxImage2>
    </Main>
  )
}