import { Container } from "./styles";

export default function Content(){

  return(
    <Container>
      <h2>Material de Estudo</h2>
      <div className="contentBox">
        <img src="/RevistaEBD.png" alt="Pdf da revista utilizada na nossa Escola Bíblica Dominical" />
        <a href="" className="link">Baixar PDF</a>
      </div>
    </Container>
  )
}
