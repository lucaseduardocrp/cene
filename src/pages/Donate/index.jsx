import DonateGrid from '../../components/DonateBox';
import { Container } from './styles';

export default function Donate(){
  return(
    <Container>
      <h4>FORMAS DE</h4>
      <h2>CONTRIBUIR</h2>
      <p>Dai sempre, e recebereis sobre o vosso colo uma boa medida, calcada, sacudida, transbordante <br /> generosamente vos darão. Portanto, à medida que usares para medir o teu próximo, essa mesma será usada para vos medir. <br /> <span>Lucas ( 6:38 )</span> </p>

      <div className="donateGrid">
        <DonateGrid
          src={"/Pix.png"}
          text={"Acesse o aplicativo do seu banco, vá para a área de transferência via PIX e utilize nossa chave CNPJ:"}
          payment={"30.991.496/0001-73"}
        />
        <DonateGrid
          src={"/Banco.png"}
          text={"Contribuição com transferência ou depósito bancário, basta realizar a operação para a nossa conta:"}
          payment={`Banco: Cora | Agência: 0001 Conta-corrente: 1680643-5 \nCNPJ: 30.991.496/0001-73`}
        />
        <DonateGrid
          src={"/Dizimo.png"}
          text={"Para contribuir de forma recorrente/mensal utilizando o cartão de crédito, acesse o link abaixo:"}
          href={""} textLink={"Contribuir recorrentemente"}
        />
      </div>
    </Container>
  )
}