import { Main, Slide, Container, ParallaxImage, ParallaxImage2, HeartIcon } from './styles';
import EventBox from '../../components/EventBox/index';
import { Link } from 'react-router-dom';

export default function Home(){
  return(
    <Main>
      <Slide />

      <section className='about' id='about'>
        <h2>Sobre nós</h2>
        <p>Nossa missão é estabelecer a cultura dos céus por onde formos. Temos como propósito amar a Deus acima de todas as coisas e ao próximo como a nós mesmos. <br /> 
        Cremos na mudança social e cultural, quando um só povo em unidade se move em busca de manifestar e revelar a Glória de Deus Pai em todas as esferas da sociedade, <br /> 
        trazendo vida ao que estava morto. Afinal, estamos aqui para servir, amar e viver a verdade de Cristo.</p>
        <img src="/SobreCeneBG.jpg" alt="" />
      </section>
      
      <Container className='newslatter' id='newslatter'>
        <h4>Quer receber conteúdos exclusivos da igreja em primeira mão?</h4>
        <p>Cadastre-se agora para ter acesso a notícias, eventos, pedidos de oração e muito mais <br /> para se conectar com a igreja.</p>
        <a className='btn btn2'>Cadastre-se</a>
      </Container>

      <Container>
        <h2>Eventos</h2>
        
        <div className="eventsGrid">
          <EventBox  src="/EventImage.png" name="Encontro Radical" />
          <EventBox  src="/EventImage.png" name="Encontro Radical" />
          <EventBox  src="/EventImage.png" name="Encontro Radical" />
        </div>
      
        <Link to={"/participate"} className='link'>Ver todos os eventos</Link>
      </Container>

      <ParallaxImage>
        <Container>
          <h2>Plano de Leitura</h2>
          <p>Aprofunde no estudo bíblico da semana junto ao seu pequeno grupo e <br /> reveja os estudos anteriores.</p>
          <Link to={"/content"} className='btn btn2'>Acesse Agora</Link>
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
            <Link to={"/donate"} className='btn btn2'>Contribua Aqui</Link>
        </Container>
      </ParallaxImage2>
    </Main>
  )
}