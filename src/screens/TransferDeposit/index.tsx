import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  Container,
  TitleArea,
  Button,
  Icon,
  SquareBalanceArea,
  SquareOne,
  SquareTwo,
  BalanceText,
  BalanceValue,
  Input,
  InputTextInfo,
  ButtonSend,
  ButtonSendText
} from './styles';

import Title from "../../components/Title";
import { StackAppNavigationProps, StackAppProps } from "../../routes/app.routes";
import { useState } from "react";

type ScreenProps = NativeStackScreenProps<StackAppNavigationProps, 'TransferDeposit'>;

export default function TransferDeposit({ route }: ScreenProps) {

  const type = route.params.type;

  const navigation = useNavigation();

  const [quantity, setQuantity] = useState(0.00);

  return (
    <Container>
      <TitleArea>
        <Title text={type === 'transfer' ? 'Transferência' : 'Depósito'} />
        <Button onPress={() => navigation.goBack()}>
          <Icon name='close-outline' />
        </Button>
      </TitleArea>

      <SquareBalanceArea>
        <BalanceText>Saldo em conta</BalanceText>
        <BalanceValue>R$1.597,00</BalanceValue>
        <SquareOne />
        <SquareTwo />
      </SquareBalanceArea>

      <Input
        value={quantity}
        onChangeValue={value => setQuantity(value as number)}
        prefix='R$'
        delimiter='.'
        separator=','
        precision={2}
        minValue={5}
      />

      <InputTextInfo>
        Quanto você deseja
        {
          type === 'transfer' ? ' Transferir' : ' Depositar'
        }
        ?
      </InputTextInfo>

      <ButtonSend>
        <ButtonSendText>{type === 'transfer' ? 'Transferir' : 'Depositar'}</ButtonSendText>
      </ButtonSend>

    </Container>
  );
};
