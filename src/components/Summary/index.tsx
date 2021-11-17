import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Saídas"></img>
                </header>
                <strong>- R$100,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entrada</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>R$500,00</strong>
            </div>

        </Container>
    );
}