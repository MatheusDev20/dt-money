import { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionModal } from './components/TransactionModal';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  );
}
