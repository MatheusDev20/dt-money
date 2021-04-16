import { useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((res) => console.log(res.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Datas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">+4000.00</td>
            <td>Desenvolvimento</td>
            <td>20/02</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-1000.00</td>
            <td>Casa</td>
            <td>13/02</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td>4000.00</td>
            <td>Desenvolvimento</td>
            <td>20/02</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );
}
