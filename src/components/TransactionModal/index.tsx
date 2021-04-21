import Modal from 'react-modal';
import { FormEvent, useState } from 'react';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import api from '../../services/api';

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function TransactionModal({ isOpen, onRequestClose }: NewTransactionModal) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      type,
      title,
      value,
      category,
    };
    api.post('/transactions', data);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container
        onSubmit={handleCreateTransaction}
      >
        <h2>Cadastrar Transação</h2>
        <input
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
          placeholder="Titulo"
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event?.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          onChange={(event) => setCategory(event?.target.value)}
          value={category}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  );
}
