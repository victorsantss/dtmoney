import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const clearTransactions = () => {
  localStorage.clear();
  window.location.reload();
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          className="newTransactionButton"
          type="button"
          onClick={onOpenNewTransactionModal}
        >
          Nova Transação
        </button>
        <button
          className="clearTransactionButton"
          type="button"
          onClick={clearTransactions}
        >
          Limpar Transações
        </button>
      </Content>
    </Container>
  );
}
