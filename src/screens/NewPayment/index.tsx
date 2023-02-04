import { useNavigation } from '@react-navigation/native';

import {
  Container,
  TitleArea,
  Button,
  Icon,
  ButtonPayment,
  ButtonPaymentText,
  BarCodeInfoText,
  BarCodeInfoNumber,
  ValuePayment,
  ValueInfoText
} from './styles';

import Title from '../../components/Title';
import CardBalance from '../../components/CardBalance';

export default function NewPayment() {

  const navigation = useNavigation();

  return (
    <Container>
      <TitleArea>
        <Title text='Novo pagamento' />
        <Button onPress={() => navigation.goBack()}>
          <Icon name='close-outline' />
        </Button>
      </TitleArea>

      <CardBalance />

      <BarCodeInfoText>Código de barras</BarCodeInfoText>
      <BarCodeInfoNumber>0 012345 678905 012345 678905</BarCodeInfoNumber>

      <ValueInfoText>Valor do boleto</ValueInfoText>
      <ValuePayment>R$79,00</ValuePayment>

      <ButtonPayment>
        <ButtonPaymentText>
          Confirmar pagamento
        </ButtonPaymentText>
      </ButtonPayment>

    </Container>
  );
};
