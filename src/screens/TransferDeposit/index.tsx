import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import {
  Container,
  TitleArea,
  Button,
  Icon,
  Input,
  InputTextInfo,
  ButtonSend,
  ButtonSendText
} from './styles';

import Title from "../../components/Title";
import CardBalance from "../../components/CardBalance";

import { StackAppNavigationProps } from "../../routes/app.routes";

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

      <CardBalance />

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
