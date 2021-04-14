import { Container } from './styles';
import incomeLogo from '../../assets/income.svg';
import outcomeLogo from '../../assets/outcome.svg';
import totalLogo from '../../assets/total.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeLogo} alt="Entradas" />
        </header>
        <strong>R$10000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeLogo} alt="Saida" />
        </header>
        <strong>R$2000,00</strong>
      </div>
      <div className="background-div">
        <header>
          <p>Entradas</p>
          <img src={totalLogo} alt="Total" />
        </header>
        <strong>R$5000,00</strong>
      </div>
    </Container>
  );
}
