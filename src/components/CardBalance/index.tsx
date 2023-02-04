import {
  SquareBalanceArea,
  BalanceText,
  BalanceValue,
  SquareOne,
  SquareTwo
} from './styles';

export default function CardBalance() {
  return (
    <SquareBalanceArea>
      <BalanceText>Saldo em conta</BalanceText>
      <BalanceValue>R$1.597,00</BalanceValue>
      <SquareOne />
      <SquareTwo />
    </SquareBalanceArea>
  );
};
