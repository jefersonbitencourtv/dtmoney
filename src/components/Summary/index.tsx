import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  console.log(transactions)

  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === "deposit"){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      if(transaction.type === "withdraw"){
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }
    }
    return acc;
  },
  {
    deposits: 0,
    withdraw: 0,
    total: 0,
  });
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(summary.deposits)}
                  </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="Saídas"></img>
                </header>
                <strong>- 
                {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(summary.withdraw)}
                  </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"></img>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(summary.total)}
                </strong>
            </div>

        </Container>
    );
}