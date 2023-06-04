import DonateGrid from '../../components/DonateBox';
import styled, { css } from 'styled-components';

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.section`
  ${flex}
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100vh;
  text-align: center;
  background: url(https://uploads-ssl.webflow.com/61679982311ac4e10a284921/61679982311ac45b8d284967_Grain_Latest.png);

  h4{
    font-size: var(--h4-font);
  }

  h2{
    font-size: var(--h2-font);
    font-weight: 500;
    color: var(--primary);
  }

  >p{
    font-size: var(--sm-font);
    line-height: 1.6;
  }

  p:nth-child(4){
    color: var(--primary);
    font-weight: 700;
  }

  .donateGrid{
    margin-top: 2rem;
    ${flex}
    gap: 4rem;
    flex-wrap: wrap;
  } 
`;

export default function Donate(){
  return(
    <main>
      <Container>
        <h4>FORMAS DE</h4>
        <h2>CONTRIBUIR</h2>
        <p>Dai sempre, e recebereis sobre o vosso colo uma boa medida, calcada, sacudida, transbordante <br /> generosamente vos darão. Portanto, à medida que usares para medir o teu próximo, essa mesma será usada para vos medir.</p>
        <p>Lucas ( 6:38 )</p>
        <div className="donateGrid">
          <DonateGrid
            src={"/Pix.png"} alt={'Pix da Igreja para caso deseje realizar seus dízimos e ofertas'}
            text={"Acesse o aplicativo do seu banco, vá para a área de transferência via PIX e utilize nossa chave CNPJ:"}
            payment={"30.991.496/0001-73"}
          />
          <DonateGrid
            src={"/Banco.png"} alt={'Banco da Igreja para caso deseje realizar seus dízimos e ofertas'}
            text={"Contribuição com transferência ou depósito bancário, basta realizar a operação para a nossa conta:"}
            payment={`Banco: Cora | Agência: 0001 Conta-corrente: 1680643-5 \nCNPJ: 30.991.496/0001-73`}
          />
          <DonateGrid
            src={"/Dizimo.png"} alt={'Banco da Igreja para caso deseje realizar seus dízimos e ofertas recorrentes'}
            text={"Para contribuir de forma recorrente/mensal utilizando o cartão de crédito, acesse o link abaixo:"}
            href={""} textLink={"Contribuir recorrentemente"}
          />
        </div>
      </Container>
    </main>
  )
}